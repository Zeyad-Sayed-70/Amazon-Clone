const { app } = require("../index");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

app.post("/create-checkout-session", async (req, res) => {
  const { data } = req.body;

  if (!data) return res.json({ url: null });

  try {
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],
      line_items: data.map((item) => {
        return {
          quantity: item.quantity,
          price_data: {
            currency: "usd",
            product_data: {
              name: item.product.title,
              images: item.product.images,
            },
            unit_amount: item.product.price * 100,
          },
        };
      }),
      success_url: `${process.env.FRONTEND_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.FRONTEND_URL}/cart`,
    });

    res.json({ url: session });
  } catch (error) {
    console.log(error);
  }
});
