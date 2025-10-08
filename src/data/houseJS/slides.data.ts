import type { ISlideCardProps } from "@/components/slideCard";
import RoomNode07102025 from "@/slides/houseJS/room-node-07-10-25";

interface ISlideData extends ISlideCardProps {
  id: string;
}

export const slideData: ISlideData[] = [
  {
    id: "1",
    title: "Construindo uma api simples com Node",
    description:
      "Slides de apresentação da aula de construção de uma api simples de cadastro de usuários utilizando express e docker(simplificado)",
    date: "08/10/2025",
    link: {
      label: "Ir para o slide",
      path: "/housejs/08-10-25/aulao-node",
    },
    prevSlide: RoomNode07102025,
    tags: ["House Js", "Node"],
  },
];
