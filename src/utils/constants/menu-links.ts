import { PAGES_PATH } from "./pages-path";

export type MenuLinkModel = {
  label: string;
  path: string;
};

export const menuLinks: MenuLinkModel[] = [
  {
    label: "Home",
    path: PAGES_PATH.HOME,
  },
  {
    label: "Projects",
    path: PAGES_PATH.PROJECTS,
  },
  {
    label: "Skills",
    path: PAGES_PATH.SKILLS,
  },
  {
    label: "About me",
    path: PAGES_PATH.ABOUT_ME,
  },
  {
    label: "Contacts",
    path: PAGES_PATH.CONTACTS,
  },
];
