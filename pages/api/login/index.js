import db from "../../../lib/db";
import { passwordVerify } from "../../../lib/passwordHelpers";
const escape = require("sql-template-strings");

export default async (req, res) => {
  const { email, password } = JSON.parse(req.body);

  try {
    const user = await db.query(escape`
      SELECT * FROM USER WHERE email = ${email}
    `);

    if (user.length === 0) return res.status(404).json({ err: "no user found" });

    const hashedPassword = user[0].password;

    const isPasswordValid = await passwordVerify(password, hashedPassword);

    if (!isPasswordValid) return res.status(404).json({ err: "invalid credentials" });

    res.status(200).json(user);
  } catch (e) {
    res.status(404).json(e);
  }
};
