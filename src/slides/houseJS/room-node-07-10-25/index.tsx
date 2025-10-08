import BaseSlide from "@/components/baseSlide";
import CodeBlockComponent from "@/components/codeBlock";
import { WhoIAm } from "@/components/slideWhoIAm";
import { Flex, HStack, Image, Stack, Text } from "@chakra-ui/react";
import { apiFlow, apiFlowV2, resturantFlow, resturantFlowV2 } from "./assets";

const RoomNode07102025 = () => {
  const dependenciesCode = `
npm i nodemon --save-dev
npm i express --save
  `;

  return (
    <BaseSlide>
      <section data-background-color="white">
        <h2>Construindo uma api simples com Node</h2>
      </section>
      <section data-background-color="white">
        <h3>O que veremos hoje?</h3>
        <ul>
          <li className="fragment">
            O que é uma{" "}
            <Text color="blue" as="span">
              api
            </Text>
            ;
          </li>
          <li className="fragment">
            O que são métodos{" "}
            <Text color="blue" as="span">
              http
            </Text>
            ;
          </li>
          <li className="fragment">
            Aprender a criar uma api do zero com{" "}
            <Text color="green" as="span">
              Node.js
            </Text>
            ;
          </li>
          <li className="fragment">
            Entender rotas, middlewares e a estrutura básica de um projeto.
          </li>
        </ul>
      </section>
      <WhoIAm />
      <section data-background-color="white">
        <h2>
          O que é uma{" "}
          <Text color="blue" as="span">
            api
          </Text>
          ?
        </h2>
        <ul>
          <li className="fragment">
            <Text textStyle="3xl" fontStyle="italic">
              "APIs são mecanismos que permitem que dois componentes de software
              se comuniquem usando um conjunto de definições e protocolos. Por
              exemplo, o sistema de software do instituto meteorológico contém
              dados meteorológicos diários. A aplicação para a previsão do tempo
              em seu telefone “fala” com esse sistema por meio de APIs e mostra
              atualizações meteorológicas diárias no telefone."{" "}
            </Text>
            <Text as="span" textStyle="3xl" w="full" textAlign="right">
              <a
                href="https://aws.amazon.com/pt/what-is/api/"
                data-preview-link
              >
                https://aws.amazon.com/pt/what-is/api/
              </a>
            </Text>
          </li>
        </ul>
      </section>
      <section data-background-color="white" className="h-full w-full">
        <HStack w="full" h="full">
          <Stack>
            <h2>O Fluxo de um restaurante</h2>
            <ul>
              <li className="fragment">Cliente</li>
              <li className="fragment">Garçom</li>
              <li className="fragment">Cozinha/Cozinheiro</li>
            </ul>
          </Stack>
          <Flex
            w="full"
            h="full"
            justifyContent="center"
            alignItems="center"
            className="fragment"
          >
            {" "}
            <Image
              src={resturantFlow}
              alt="Fluxo de um restaurante"
              data-preview-image={resturantFlowV2}
            />
          </Flex>
        </HStack>
      </section>
      <section data-background-color="white" className="h-full w-full">
        <HStack w="full" h="full">
          <Stack>
            <h2>O Fluxo de um restaurante</h2>
            <ul>
              <li className="fragment">Cliente {"-->"} Navegador</li>
              <li className="fragment">Garçom {"-->"} Api</li>
              <li className="fragment">Cozinha {"-->"} Servidor</li>
            </ul>
          </Stack>
          <Flex w="full" h="full" justifyContent="center" alignItems="center">
            <Image
              src={resturantFlow}
              alt="Fluxo de um restaurante"
              data-preview-image={resturantFlowV2}
            />
          </Flex>
        </HStack>
      </section>

      <section data-background-color="white" className="h-full w-full">
        <HStack w="full" h="full">
          <Stack>
            <h2>
              O Fluxo de funcionamento de uma{" "}
              <Text color="blue" as="span">
                api
              </Text>{" "}
            </h2>
          </Stack>
          <Flex w="full" h="full" justifyContent="center" alignItems="center">
            <Image
              src={apiFlow}
              alt="Fluxo de um restaurante"
              data-preview-image={apiFlowV2}
            />
          </Flex>
        </HStack>
      </section>
      <section>
        <h2>
          Prótocolo Http{" "}
          <Text textStyle="3xl" fontStyle="italic">
            (hypertext transfer protocol)
          </Text>{" "}
        </h2>
      </section>

      <section data-background-color="white">
        <h2>Métodos Http</h2>
        <ul>
          <li className="fragment">Get</li>
          <li className="fragment">Post</li>
          <li className="fragment">Patch</li>
          <li className="fragment">Put</li>
          <li className="fragment">Delete</li>
        </ul>
      </section>

      <section data-background-color="white">
        <h2>Inciando a nossa aplicação! Finalmente...</h2>
      </section>

      <section>
        <h2>Baixando algumas dependências para o nosso projeto:</h2>
        <CodeBlockComponent
          code={dependenciesCode}
          language="bash"
          title="bash"
          root={{
            meta: {
              showLineNumbers: true,
            },
          }}
        />
      </section>

      <section>
        <h2>Obrigado pela atenção!</h2>
      </section>
    </BaseSlide>
  );
};

export default RoomNode07102025;
