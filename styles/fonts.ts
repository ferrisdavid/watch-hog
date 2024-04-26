// Next Fonts.
import { Montserrat, Montserrat_Alternates } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});
const montserrat_alt = Montserrat_Alternates({
  subsets: ["latin"],
  variable: "--font-montserrat-alt",
  weight: "800",
});

export { montserrat, montserrat_alt };
