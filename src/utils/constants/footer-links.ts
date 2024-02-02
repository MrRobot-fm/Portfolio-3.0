import { SOCIAL_PATH } from "./pages-path";

export type FooterSocialLinks = {
  label: string;
  url: string;
};

export const footerSocialLinks: FooterSocialLinks[] = [
  {
    label: "Linkedin",
    url: SOCIAL_PATH.LINKEDIN,
  },
  {
    label: "GitHub",
    url: SOCIAL_PATH.GITHUB,
  },
  {
    label: "Email",
    url: SOCIAL_PATH.EMAIL,
  },
  {
    label: "Instagram",
    url: SOCIAL_PATH.INSTAGRAM,
  },
];
