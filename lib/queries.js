import db from "./db";
const escape = require('sql-template-strings');

export async function updateStripeId(stripeId, userEmail) {
  const updatedUser = await db.query(
    escape`UPDATE users SET stripe_id = ${stripeId} WHERE email = ${userEmail}`
  );

  return updatedUser;
}
