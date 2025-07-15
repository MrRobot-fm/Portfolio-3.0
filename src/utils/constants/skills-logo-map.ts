import ChakraLogo from "@/assets/tech-stack/chakra-ui.svg";
import CsslLogo from "@/assets/tech-stack/css3.svg";
import ExpressLogo from "@/assets/tech-stack/express.svg";
import FigmaLogo from "@/assets/tech-stack/figma.svg";
import FramerMotionLogo from "@/assets/tech-stack/framer-motion.svg";
import GitLogo from "@/assets/tech-stack/git.svg";
import GithubLogo from "@/assets/tech-stack/github.svg";
import HtmlLogo from "@/assets/tech-stack/html5.svg";
import JsLogo from "@/assets/tech-stack/javascript.svg";
import NextLogo from "@/assets/tech-stack/nextjs.svg";
import NodeLogo from "@/assets/tech-stack/nodejs.svg";
import TanstackQueryLogo from "@/assets/tech-stack/react-query.svg";
import ReactRouterLogo from "@/assets/tech-stack/react-router.svg";
import ReactLogo from "@/assets/tech-stack/react.svg";
import ReduxLogo from "@/assets/tech-stack/redux.svg";
import SassLogo from "@/assets/tech-stack/sass.svg";
import TailwindLogo from "@/assets/tech-stack/tailwindcss.svg";
import TsLogo from "@/assets/tech-stack/typescript.svg";

export type TechLogoMapModel = {
  name: string;
  src: string;
};

export const techLogoMap: TechLogoMapModel[] = [
  {
    name: "html",
    src: HtmlLogo,
  },
  {
    name: "css",
    src: CsslLogo,
  },
  {
    name: "sass",
    src: SassLogo,
  },
  {
    name: "javascript",
    src: JsLogo,
  },
  {
    name: "typescript",
    src: TsLogo,
  },
  {
    name: "react",
    src: ReactLogo,
  },
  {
    name: "react-router-dom",
    src: ReactRouterLogo,
  },
  {
    name: "redux",
    src: ReduxLogo,
  },
  {
    name: "next",
    src: NextLogo,
  },
  {
    name: "tanstack-query",
    src: TanstackQueryLogo,
  },
  {
    name: "tailwind",
    src: TailwindLogo,
  },
  {
    name: "nodejs",
    src: NodeLogo,
  },
  {
    name: "express",
    src: ExpressLogo,
  },
  {
    name: "framer-motion",
    src: FramerMotionLogo,
  },
  {
    name: "chakra-ui",
    src: ChakraLogo,
  },
  {
    name: "figma",
    src: FigmaLogo,
  },
  {
    name: "git",
    src: GitLogo,
  },
  {
    name: "github",
    src: GithubLogo,
  },
];
