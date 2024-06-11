// pages/api/create-payment-intent.ts

import { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      const { items } = req.body;

      // Розрахуйте суму оплати, виходячи з item-ів (в даному прикладі просто фіксована сума)
      const amount = 5000; // 50.00 USD

      const paymentIntent = await stripe.paymentIntents.create({
        amount,
        currency: "usd",
        automatic_payment_methods: {
          enabled: true,
        },
      });

      res.status(200).send({
        clientSecret: paymentIntent.client_secret,
      });
    } catch (err) {
      res.status(500).json({ statusCode: 500, message: (err as Error).message });
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}
