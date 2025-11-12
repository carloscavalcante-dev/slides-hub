import BaseSlide from "@/components/baseSlide";
import { WhoIAm } from "@/components/slideWhoIAm";
import { Box, Center, Heading, Image, Stack } from "@chakra-ui/react";
import {
  firstGt,
  fisrtHouseEvent,
  guanabara,
  logoGt,
  recruitingChallenge,
} from "./assets";

export const GenerationMeeting141125 = () => {
  return (
    <BaseSlide>
      <section data-background-color="white">
        <h2>
          O caminho das pedras e a continuação dele.
          <span className="block">
            A "experiência" na carreira de um ex gt.
          </span>
        </h2>
      </section>

      <section data-background-color="white">
        <h2>O que veremos hoje?</h2>
        <ul>
          <li>Como iniciei na área</li>
          <li>Minhas dificuldades</li>
          <li>Os amigos que formamos pelo caminho</li>
        </ul>
      </section>
      <WhoIAm />

      <section data-background-color="red">
        <h2>Isso não é uma palestra de superação!</h2>

        <li className="fragment">Apenas uma leve motivação</li>
      </section>

      <section data-background-color="white">
        <h2>Como iniciei na área</h2>
        <li className="fragment">O percursor da palavra</li>
        <Box w="65rem" className="fragment">
          <Stack w="full" h="full">
            <Image src={guanabara} />
          </Stack>
        </Box>
      </section>
      <section>
        <h2>Meu primeiro dia de GT</h2>
        <ul>
          <li className="fragment">
            Ambiente totalmente novo e um{" "}
            <span className="text-blue-400">
              mar de possibilidades se abrindo.
            </span>
          </li>
          <li className="fragment">
            A primeira barreira:
            <ul>
              <li className="text-red-500">
                Todos pareciam saber bem mais do que eu
              </li>
              <li className="fragment">
                "Formado em JavaScript pelo Gustavo Guanabara"
              </li>
            </ul>
          </li>
        </ul>
      </section>
      <section data-background-color="white">
        <h2>O dia a dia no curso</h2>
        <ul>
          <li className="fragment">
            Estudando pela manhã e acordando às 5h todos os dias.
          </li>
          <li className="fragment">
            <span className="text-red-500">“Sugando”</span> o máximo de
            conhecimento possível dos professores — e dos amigos.
          </li>
        </ul>
      </section>
      <section data-background-color="white" data-vertical-align-top>
        <h2 className="text-amber-400">A comunidade</h2>

        <div className="flex">
          <ul>
            <li className="fragment">
              Oportunidade de estar em um ambiente que gerava conhecimento e
              conexão com a área
            </li>
            <li className="fragment">Minha primeira palestra</li>
          </ul>

          <Box w="60rem" className="fragment">
            <Stack w="full" h="full">
              <Image
                src={fisrtHouseEvent}
                data-preview-image={fisrtHouseEvent}
              />
            </Stack>
          </Box>
        </div>
      </section>
      <section data-background-color="white">
        <h2>Os amigos que fizemos pelo caminho</h2>
        <Center>
          <Box w="50rem" className="fragment">
            <Stack w="full" h="full">
              <Image src={firstGt} data-preview-image={firstGt} />
            </Stack>
          </Box>
        </Center>
      </section>
      <section>
        <h2>As primeiras opotunidades</h2>
        <ul>
          <li className="fragment">Monitor do geração tech 1.5</li>
          <li className="fragment">
            Primeira oportunidade como dev — projetos reais, erros reais,
            aprendizados reais.
            <ul>
              <li>Desenvolvedor Front End em uma startup</li>
            </ul>
          </li>

          <li className="fragment"> Desafio IEL</li>
        </ul>
      </section>
      <section data-background-color="white">
        <h2>Desafio IEL</h2>
        <Center>
          <Box w="30rem" className="fragment">
            <Stack w="full" h="full">
              <Image
                src={recruitingChallenge}
                data-preview-image={recruitingChallenge}
              />
            </Stack>
          </Box>
        </Center>
      </section>
      <section data-background-color="white">
        <blockquote className="text-2xl italic">
          “Toda vez em que a sorte me procurou, me encontrou trabalhando.”
        </blockquote>
        <cite>— Pablo Picasso</cite>
      </section>

      <section>
        <h2>Obrigado pela atenção</h2>
        <h3 className="fragment">E...</h3>
      </section>
      <section>
        <ul className="*:list-none">
          <li>
            <Heading
              as="h3"
              position="relative"
              w="fit-content"
              _after={{
                content: "''",
                w: "20%",
                h: "1",
                bg: "cyan",
                position: "absolute",
                bottom: "0",
                left: "0",
              }}
            >
              Bem-vindos ao Geração Tech!{" "}
            </Heading>
          </li>
          <li className="flex w-full items-center justify-center">
            <Box w="10rem" as="div">
              <img
                src={logoGt}
                alt=""
                width="100%"
                className="animate-spin-2"
              />
            </Box>
          </li>
        </ul>
      </section>
    </BaseSlide>
  );
};
