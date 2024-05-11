import localFont from "next/font/local";

const kaufmann = localFont({ src: "../../public/fonts/kaufmann-bt.ttf" });

import { Reviews } from "@/components/Reviews";

export default function Home() {
  return (
    <main>
      <Reviews />
    </main>
  );
}
