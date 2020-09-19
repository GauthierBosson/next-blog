import db from "../../lib/db";
const escape = require("sql-template-strings");

export default async (req, res) => {
  const { name, email, password } = JSON.parse(req.body);

  try {
    const newUser = await db.query(escape`
      INSERT INTO USER (name, email, password) VALUES (${name}, ${email}, ${password})
    `);

    res.status(200).json(newUser);
  } catch (e) {
    res.status(404).json({ "message": "an error occurred while creating user" });
  }
};
