import type { ImageProps } from "next/image";
import FlightFootprintDetailImg from "@/assets/projects/flight-footprint-detail-img.png";
import FlightFootprintMainImg from "@/assets/projects/flight-footprint.png";
import MaptyDetailImg from "@/assets/projects/mapty-detail-img.png";
import MaptyMainImg from "@/assets/projects/mapty.png";
import SpoonacularDetailImg from "@/assets/projects/spoonacular-detail-img.png";
import SpoonacularMainImg from "@/assets/projects/spoonacular.png";
import TokenDiscoverDetailImg from "@/assets/projects/token-discover-detail-img.png";
import TokenDiscoverMainImg from "@/assets/projects/token-discover.png";
import VionexFlowMainImg from "@/assets/projects/vionex-flow.png";

export type ProjectDetailsDataModel = {
  name: string;
  mainImage: ImageProps["src"];
  detailImage?: ImageProps["src"];

  links: {
    label: string;
    url: string;
  }[];
  info: {
    label: string;
    text: string;
  }[];
};

export const projectDetailsData: ProjectDetailsDataModel[] = [
  {
    name: "Vionex Flow",
    info: [
      {
        label: "Description",
        text: "This project aims to provide an effective and user-friendly solution for project management. It is designed to help individuals and teams plan, organize, track, and collaborate on projects efficiently. Key features may include task assignment, progress tracking, deadlines, and reporting tools. The ultimate goal is to streamline workflows and improve productivity across various project stages.",
      },
      {
        label: "Technologies",
        text: "Turborepo, Next JS, Node, Express, Typescript, Tailwind Css, Shadcn/ui, Prisma, Supabase, Zod, Vitest, Cypress.",
      },
    ],
    mainImage: VionexFlowMainImg,
    links: [
      {
        label: "GitHub",
        url: "https://github.com/MrRobot-fm/Vionex-Flow",
      },
    ],
  },
  {
    name: "Token Discover",
    info: [
      {
        label: "Description",
        text: "The platform aims to provide users with a tool to explore, understand and interact with digital tokens. With a combination of resources that allows us to discover the various collections and NFTs trending right now.",
      },
      {
        label: "Technologies",
        text: "Next JS, Typescript, Tailwind Css, Tanstack Query, React Hook Form, Framer Motion.",
      },
    ],
    mainImage: TokenDiscoverMainImg,
    detailImage: TokenDiscoverDetailImg,
    links: [
      {
        label: "Preview",
        url: "https://token-discover.vercel.app/",
      },
      {
        label: "GitHub",
        url: "https://github.com/MrRobot-fm/Token-Discover",
      },
    ],
  },
  {
    name: "Flight Footprint",
    info: [
      {
        label: "Description",
        text: "Flight Footprint is a website developed with the idea of ​​making users aware of the pollution produced by air travel. Inside we can find a section where we can calculate the CO2 emissions produced by a flight by entering data such as: departure airport , destination airport, number of passengers and flight class.",
      },
      {
        label: "Technologies",
        text: "React JS, React Router e Tailwind Css",
      },
    ],
    mainImage: FlightFootprintMainImg,
    detailImage: FlightFootprintDetailImg,
    links: [
      {
        label: "Preview",
        url: "https://flightfootprint.netlify.app/",
      },
      {
        label: "GitHub",
        url: "https://github.com/MrRobot-fm/Flight-footprint",
      },
    ],
  },
  {
    name: "Spoonacular",
    info: [
      {
        label: "Description",

        text: "Spoonacular is a web app dedicated to the vegetarian world. It allows us to search for recipes and ingredients and make our meals more conscious and delicious.",
      },
      {
        label: "Technologies",
        text: "React JS, React Router e Tailwind Css",
      },
    ],
    mainImage: SpoonacularMainImg,
    detailImage: SpoonacularDetailImg,
    links: [
      {
        label: "Preview",
        url: "https://spoonacular-fm.netlify.app/",
      },
      {
        label: "GitHub",
        url: "https://github.com/MrRobot-fm/Spoonacular",
      },
    ],
  },
  {
    name: "Mapty",
    info: [
      {
        label: "Description",

        text: "Whit Mapty you can record your running or cycling workouts by entering parameters such as location, distance, time, pace and steps/minute. You can also see all your workouts at a glance on the map, you can also sort properties and remove workouts.",
      },
      {
        label: "Technologies",
        text: "Html, Css e Javascript.",
      },
    ],
    mainImage: MaptyMainImg,
    detailImage: MaptyDetailImg,
    links: [
      {
        label: "Preview",
        url: "https://mapty-project-js.netlify.app/",
      },
      {
        label: "GitHub",
        url: "https://github.com/MrRobot-fm/Mapty",
      },
    ],
  },
];
