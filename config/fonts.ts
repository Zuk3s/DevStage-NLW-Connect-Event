import { Montserrat, Oxanium } from "next/font/google";

const oxanium = Oxanium({
  weight: ["500", "600"],
  subsets: ["latin"],
  variable: "--font-oxanium",
});

const montserrat = Montserrat({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export { oxanium, montserrat };
