import localFont from "next/font/local";

const kaufmann = localFont({ src: "../../public/fonts/kaufmann-bt.ttf" });

import { Reviews } from "@/components/Reviews";
import LastSectionHome from "@/components/LastSectionHome";

export default function Home() {
  return (
    <main>
      <Reviews />
      <LastSectionHome/>
    </main>
  );
}
