import "~/styles/globals.css";

import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ['400', '700'],
  variable: "--font-roboto",
});

export const metadata = {
  title: "ModernWalk",
  description: "ModernWalk",
  // icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`font-roboto ${roboto.variable}`}>{children}</body>
    </html>
  );
}
