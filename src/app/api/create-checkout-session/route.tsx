import { NextRequest } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
    apiVersion: '2024-04-10',
  });

//   const redirectToStep7 = (req: NextRequest, status: 'success' | 'cancel') => {
//     const returnUrl = req.headers.get('referer'); // URL сторінки, з якої був перехід до оплати
//     const redirectUrl = `${returnUrl}?paymentStatus=${status}`;
//     return new Response(null, {
//       status: 303, // Redirect
//       headers: {
//         Location: redirectUrl,
//       },
//     });
//   };

export async function POST(req: NextRequest) {
  try {
    const { price } = await req.json() as { price: number };
    const origin = req.headers.get('origin') || 'http://localhost:3000';

      // Створення продукту
      const product = await stripe.products.create({
        name: 'Cleaning',
        type: 'service',
      });

      const productId = product.id;

  // Створення ціни для продукту
  const stripePrice = await stripe.prices.create({
    unit_amount: price, // ціна у центах, яка приходить з вашої форми букінгу
    currency: 'usd',
    product: productId,
  });

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price: stripePrice.id, // використовуємо id створеної ціни
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${origin}/success`,
      cancel_url: `${origin}/cancel`,
    });

    return new Response(JSON.stringify({ id: session.id }), { status: 200 });
  } catch (err: any) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
}
