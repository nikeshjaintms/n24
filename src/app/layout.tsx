import type { Metadata } from "next";
import "../styles.css";

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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500&family=Inter:wght@300;400;500;600&family=Manrope:wght@300;400;500;600&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Sacramento&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
