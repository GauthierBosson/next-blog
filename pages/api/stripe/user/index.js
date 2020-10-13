import nc from "next-connect";
import { updateStripeId } from "../../../../lib/queries";

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const handler = nc().post(async (req, res) => {
  const { userEmail } = JSON.parse(req.body);

  try {
    const newCustomer = await stripe.customers.create({
      email: userEmail,
    });

    const rawUpdatedUser = await updateStripeId(newCustomer.id, userEmail);

    res.status(200).json({update: rawUpdatedUser, stripeId: newCustomer.id});
  } catch (error) {
    res.status(404).json(error);
  }
});

export default handler;
