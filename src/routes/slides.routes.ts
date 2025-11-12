import { GenerationMeeting141125 } from "@/slides/apresentacoes/14-11-25-encontro-de-geracoes-";
import { BootCampApresentationSlide } from "@/slides/apresentacoes/bootcamp";
import JQueryApresentationSlide from "@/slides/apresentacoes/jquery";
import { DevWebIntroductionRoom1 } from "@/slides/geracaoTech";
import RoomNode07102025 from "@/slides/houseJS/room-node-07-10-25";
import type React from "react";

interface ISlideRoutesSchema {
  path: string;
  label?: string;
  element: React.ElementType;
}

export const slideRoutesSchema: ISlideRoutesSchema[] = [
  {
    path: "/geracao-tech/modulo-1/aula-introdutoria",
    element: DevWebIntroductionRoom1,
  },
  {
    path: "/apresentacoes/jquery",
    element: JQueryApresentationSlide,
  },
  {
    path: "/apresentacoes/bootcamp",
    element: BootCampApresentationSlide,
  },
  {
    path: "/housejs/08-10-25/aulao-node",
    element: RoomNode07102025,
  },
  {
    path: "/apresentacoes/encontro-geracoes-14-11-25",
    element: GenerationMeeting141125,
  },
];
