import type { FooterSocialLinks } from "@/utils/constants/footer-links";
import type { ButtonProps } from "@/components/atoms/Button/Button.props";

export interface SocialLinkProps extends ButtonProps {
  socialLinks: FooterSocialLinks;
  index: number;
}
