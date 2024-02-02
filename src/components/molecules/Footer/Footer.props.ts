import type { FooterSocialLinks } from "@/utils/constants/footer-links";
import type { MenuLinkModel } from "@/utils/constants/menu-links";

export type FooterProps = {
  label: string;
  caption: string;
  ctaLabel: string;
  footerLinks: MenuLinkModel[];
  socialLinks: FooterSocialLinks[];
  legalInfo: string;
};
