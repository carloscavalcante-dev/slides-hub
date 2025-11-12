import type { ISlideCardProps } from "@/components/slideCard";
import { GenerationMeeting141125 } from "@/slides/apresentacoes/14-11-25-encontro-de-geracoes-";
import { BootCampApresentationSlide } from "@/slides/apresentacoes/bootcamp";
import JQueryApresentationSlide from "@/slides/apresentacoes/jquery";

interface ISlideData extends ISlideCardProps {
  id: string;
}

export const slideApresetnationsData: ISlideData[] = [
  {
    id: "1",
    date: "23/06/2025",
    title: "JQuery ? 🤢 : 🤯",
    description: "Slide apresentação curso de full stack sobre JQuery.",
    link: {
      label: "Ir para o slide",
      path: "/apresentacoes/jquery",
    },
    prevSlide: JQueryApresentationSlide,
    tags: ["Apresentação"],
  },
  {
    id: "2",
    date: "05/07/2025",
    title: "Bootcamp apresentação",
    description: "bootcamp",
    link: {
      label: "Ir para o slide",
      path: "/apresentacoes/bootcamp",
    },
    prevSlide: BootCampApresentationSlide,
    tags: ["Apresentação"],
  },
  {
    id: "3",
    date: "14/11/2025",
    title:
      "O caminho das pedras e a continuação dele. A experiência na carreira de um ex gt.",
    description: "Palestra para o encontro de gerações",
    link: {
      label: "Ir para o slide",
      path: "/apresentacoes/encontro-geracoes-14-11-25",
    },
    prevSlide: GenerationMeeting141125,
    tags: ["Apresentação"],
  },
];
