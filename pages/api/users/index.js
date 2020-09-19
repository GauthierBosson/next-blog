import db from "../../lib/db";
const escape = require('sql-template-strings');

export default async (req, res) => {
	const users = await db.query(escape`
		SELECT *
		FROM USER
	`)

	res.status(200).json(users);
}