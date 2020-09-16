import db from '../../lib/db';
const escape = require('sql-template-strings');

export default async (req, res) => {
  const { name, email, password } = JSON.parse(req.body);
  console.log(req.body);
  const newUser = await db.query(escape`
    INSERT INTO USER (name, email, password) VALUES (${name}, ${email}, ${password})
  `)

  res.json(newUser);
}