import Providers from "@/components/providers";
import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";

const roboto = Poppins({
  subsets: ["latin"],
  weight: ["100", "300", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "Jethings",
  description: "something we are trying to build it ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
