import type { ImageProps } from "next/image";
import FlightFootprintImg from "@/assets/projects/flight-footprint.png";
import MaptyImg from "@/assets/projects/mapty.png";
import SpoonacularImg from "@/assets/projects/spoonacular.png";
import TokenDiscoverImg from "@/assets/projects/token-discover.png";
import VionexFlowImg from "@/assets/projects/vionex-flow.png";
import { PROJECTS_PATH } from "./pages-path";

export type ProjectModel = {
  tag: string;
  projectName: string;
  image: ImageProps["src"];
  url: string;
  descriptions: string;
  liveDemoUrl?: string;
};

export const projectsMap: ProjectModel[] = [
  {
    projectName: "Vionex Flow",
    tag: "work in progress",
    image: VionexFlowImg,
    url: PROJECTS_PATH.VIONEX_FLOW,
    descriptions:
      "A smart and intuitive platform for managing projects, tasks, and teams. Streamline workflows, boost productivity, and keep everything on track.",
  },
  {
    projectName: "Token Discover",
    tag: "work",
    image: TokenDiscoverImg,
    url: PROJECTS_PATH.TOKEN_DISCOVER,
    descriptions:
      "The platform aims to provide users with a tool to explore, understand and interact with digital tokens.",
    liveDemoUrl: "https://token-discover.vercel.app",
  },
  {
    projectName: "Flight Footprint",
    tag: "work",
    image: FlightFootprintImg,
    url: PROJECTS_PATH.FLIGHT_FOOTPRINT,
    descriptions:
      "The project was developed with the idea of making users aware of the pollution produced by air travel.",
    liveDemoUrl: "https://flightfootprint.netlify.app",
  },
  {
    projectName: "Spoonacular",
    tag: "work",
    image: SpoonacularImg,
    url: PROJECTS_PATH.SPOONACULAR,
    descriptions:
      "Dedicated to the vegetarian world, the platform allows us to search for recipes and ingredients and make our meals more conscious and delicious.",
    liveDemoUrl: "https://spoonacular-fm.netlify.app",
  },
  {
    projectName: "Mapty",
    tag: "work",
    image: MaptyImg,
    url: PROJECTS_PATH.MAPTY,
    descriptions:
      "Whit Mapty you can record your running or cycling related workouts by entering data such as distance, time, gain and steps/minute.",
    liveDemoUrl: "https://mapty-project-js.netlify.app",
  },
];
