import { NextRequest } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: "2024-04-10",
});

export async function POST(req: NextRequest) {
  try {
    const { price, form } = (await req.json()) as { price: number; form: any };
    const origin = req.headers.get("origin") || "http://localhost:3000";

    const extras =
      form.extras && form.extras.length > 0 ? form.extras.join(", ") : "";
    const productName = `${form.service}${extras ? `/${extras}` : ""}/${
      form.bedroom
    } bedrooms/${form.bathroom} bathrooms/${form.area}`;

    // Створення продукту
    const product = await stripe.products.create({
      name: productName,
      type: "service",
    });

    const productId = product.id;

    // Створення ціни для продукту
    const stripePrice = await stripe.prices.create({
      unit_amount: price, 
      currency: "usd",
      product: productId,
    });

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card", "affirm"],
      line_items: [
        {
          price: stripePrice.id, 
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${origin}/success`,
      cancel_url: `${origin}/booking/step_6`,
    });

    return new Response(JSON.stringify({ id: session.id }), { status: 200 });
  } catch (err: any) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
    });
  }
}
