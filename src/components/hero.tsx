"use client";

import Button from "./UI/Button";

export default function Hero() {
  return (
    <>
      <section className=" py-5 bg-cover bg-no-repeat bg-center bg-[url('/images/mobile1.webp')] ">
        <div>
          <h1>Spend time on your loved ones, not on cleaning</h1>

          <div>
            <Button type="button" style="home-book-now">
              <span>Book Now</span>
            </Button>
            <Button type="button" style="home-contact-us">
              <span>Contact Us</span>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
