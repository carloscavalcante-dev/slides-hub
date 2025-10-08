import type { ISlideCardProps } from "@/components/slideCard";
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
];
