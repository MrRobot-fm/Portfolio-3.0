import type { Metadata } from "next";
import { ChakraProviders } from "@/lib/chakra/provider/chakra-provider";
import { manrope } from "@/public/fonts";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={manrope.className}>
      <body>
        <ChakraProviders>{children}</ChakraProviders>
      </body>
    </html>
  );
}
