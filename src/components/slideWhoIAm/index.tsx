import { Box, Heading } from "@chakra-ui/react";
import { profileImage } from "./assets";

export const WhoIAm = () => {
  const topics = [
    "Ex geração Tech;",
    "Formado em JavaScript pelas ruas;",
    "Especialista em gambiarras;",
    "faz de tudo developer;",
    "Professor quando da certo;",
    "Desenvolvedor Full Stack (Fiec).",
  ];

  return (
    <>
      <section>
        <Heading
          as="h3"
          position="relative"
          w="fit-content"
          _after={{
            content: "''",
            w: "30%",
            h: "1",
            bg: "cyan",
            position: "absolute",
            bottom: "0",
            left: "0",
          }}
        >
          Quem sou eu?{" "}
        </Heading>
      </section>
      <section data-vertical-align-top>
        <Box
          as="div"
          w="100%"
          h="100%"
          display="flex"
          gap={{ base: 5, md: 10 }}
          flexDirection={{ base: "column", md: "row" }}
          alignItems="center"
        >
          <Box>
            <Heading as="h3" className="fragment">
              Carlos Eduardo
            </Heading>
            <ul>
              {topics.map((topic) => (
                <Box
                  key={topic}
                  as="li"
                  fontSize="4xl"
                  className="fragment"
                  _marker={{ color: "cyan" }}
                >
                  {topic}
                </Box>
              ))}
            </ul>
          </Box>
          <Box w="20rem">
            <img src={profileImage} alt="Foto de perfil" width="100%" />
          </Box>
        </Box>
      </section>
    </>
  );
};
