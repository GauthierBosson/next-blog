import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useSession } from "next-auth/client";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [session] = useSession();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (error) {
      console.log("[error]", error);
    } else {
      console.log("[PaymentMethod]", paymentMethod);

      const { user } = session;

      if (user.stripeId !== null) {
        console.log("stripe user exists");
      } else {
        try {
          const newStripeUser = await fetch("/api/stripe/user", {
            method: "POST",
            body: JSON.stringify({ userEmail: user.email }),
          });

          const res = await newStripeUser.json();
          console.log(res);
        } catch (error) {
          console.log(error);
        }
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <button type="submit" disabled={!stripe}>
        Payer
      </button>
    </form>
  );
};

export default CheckoutForm;
