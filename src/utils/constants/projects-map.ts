import type { ImageProps } from "next/image";
import FlightFootprintImg from "@/assets/projects/flight-footprint.png";
import MaptyImg from "@/assets/projects/mapty.png";
import SpoonacularImg from "@/assets/projects/spoonacular.png";
import TokenDiscoverImg from "@/assets/projects/token-discover.png";
import { PROJECTS_PATH } from "./pages-path";

export type ProjectModel = {
  tag: string;
  projectName: string;
  image: ImageProps["src"];
  url: string;
  descriptions: string;
  liveDemoUrl: string;
};

export const projectsMap: ProjectModel[] = [
  {
    projectName: "Token Discover",
    tag: "work",
    image: TokenDiscoverImg,
    url: PROJECTS_PATH.TOKEN_DISCOVER,
    descriptions:
      "La piattaforma mira a fornire agli utenti uno strumento per esplorare, comprendere e interagire con i token digitali.",
    liveDemoUrl: "https://token-discover.vercel.app",
  },
  {
    projectName: "Flight Footprint",
    tag: "work",
    image: FlightFootprintImg,
    url: PROJECTS_PATH.FLIGHT_FOOTPRINT,
    descriptions:
      "Il progetto è stato sviluppato con l'idea di rendere consapevoli gli utenti dell'inquinamento prodotto dai viaggi aerei.",
    liveDemoUrl: "https://flightfootprint.netlify.app",
  },
  {
    projectName: "Spoonacular",
    tag: "work",
    image: SpoonacularImg,
    url: PROJECTS_PATH.SPOONACULAR,
    descriptions:
      "Dedicato al mondo vegetariano, la piattaforma ci permette di cercare ricette ed ingredienti e rendere i nostri pasti più consapevoli e deliziosi.",
    liveDemoUrl: "https://spoonacular-fm.netlify.app",
  },
  {
    projectName: "Mapty",
    tag: "work",
    image: MaptyImg,
    url: PROJECTS_PATH.MAPTY,
    descriptions:
      "In Mapty puoi registrare i tuoi allenamenti relativi alla corsa o al ciclismo inserendo dei dati come distanza, tempo, andatura e passi/minuto.",
    liveDemoUrl: "https://mapty-project-js.netlify.app",
  },
];
