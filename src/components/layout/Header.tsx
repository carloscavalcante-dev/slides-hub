import { Container, Icon } from "@chakra-ui/react";
import Navbar from "./Navbar";
import { MdOutlineSlideshow } from "react-icons/md";

const Header = () => {
  return (
    <Container
      as="header"
      border="1pt solid #27272a"
      padding="4"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      position="sticky"
      top="0"
      margin="0"
      maxW="100vw"
      zIndex="docked"
      bg="gray.900"
    >
      <Icon size="2xl" color="cyan.400">
        <MdOutlineSlideshow />
      </Icon>
      <Navbar />
    </Container>
  );
};

export default Header;
