import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

import CheckoutForm from "../checkoutForm/checkoutForm";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY);

const StripeCheckout = () => (
  <Elements stripe={stripePromise}>
    <CheckoutForm />
  </Elements>
);

export default StripeCheckout;
