import { footerSocialLinks } from "@/utils/constants/footer-links";
import { menuLinks } from "@/utils/constants/menu-links";
import type { FooterProps } from "@/components/molecules/Footer/Footer.props";

export const footerData: FooterProps = {
  label: "Contact",
  caption: " Let's start creating together",
  ctaLabel: "let's talk",
  footerLinks: menuLinks,
  socialLinks: footerSocialLinks,
  legalInfo: "Federico Migliore. All right reserved.",
};
