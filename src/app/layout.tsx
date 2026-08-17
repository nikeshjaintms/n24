import type { Metadata } from "next";
import { Cormorant_Garamond, Playfair_Display, Manrope, Inter, Sacramento } from "next/font/google";
import "../styles.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-manrope",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const sacramento = Sacramento({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-sacramento",
  display: "swap",
});

export const metadata: Metadata = {
  title: "N24 Pilates & Wellness Studio | Premium Digital Reformer & Infrared Sauna in Applecross",
  description:
    "Experience Applecross, Perth's premier self-guided Digital Reformer Pilates & Infrared Sauna studio. Build core strength, mobility, and recovery with 800+ on-demand classes. Open 5am–10pm daily.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${cormorant.variable} ${playfair.variable} ${manrope.variable} ${inter.variable} ${sacramento.variable}`}>
        {children}
      </body>
    </html>
  );
}
