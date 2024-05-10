import mobileImage from "../images/mobile1.webp";

import Button from "./UI/Button";

export default function Hero() {
  const backgroundImageUrl = `url(${mobileImage.src})`;

  return (
    <>
      <section
        className="p-5 relative bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: backgroundImageUrl }}
      >
        <div>
          <h1 className="h1">Spend time on your loved ones, not on cleaning</h1>

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
