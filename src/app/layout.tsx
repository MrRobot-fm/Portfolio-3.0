import type { Metadata } from "next";
import type { ReactNode } from "react";
import { footerData } from "@/utils/constants/data/footer";
import { menuLinks } from "@/utils/constants/menu-links";
import { ChakraProviders } from "@/lib/chakra/provider/chakra-provider";
import { Footer } from "@/components/molecules/Footer/Footer";
import { Navbar } from "@/components/molecules/Navbar/Navbar";
import { manrope } from "@/public/fonts";

export const metadata: Metadata = {
  title: "Federico Migliore | Front-end developer | Personal website",
  description: "Federico Migliore personal website",
  icons: {
    icon: "/app-logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className={manrope.className}>
      <body>
        <ChakraProviders>
          <Navbar links={menuLinks} />
          {children}
          <Footer {...footerData} />
        </ChakraProviders>
      </body>
    </html>
  );
}
