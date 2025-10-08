import { baseRoutesSchema } from "@/routes/base.routes";
import { IconButton, Menu, Portal, Tabs } from "@chakra-ui/react";
import { TfiMenuAlt } from "react-icons/tfi";
import { Link, useLocation } from "react-router-dom";

export const Navbar = () => {
  const { pathname } = useLocation();

  return (
    <>
      <Menu.Root aria-label="Menu de navegação">
        <Menu.Trigger asChild display={{ md: "none" }}>
          <IconButton
            variant="outline"
            size="lg"
            _hover={{
              bg: "cyan.400",
              color: "gray.900",
              boxShadow: "0 4px 8px rgba(0, 255, 255, 0.3)",
            }}
            _open={{
              bg: "cyan.400",
              color: "gray.900",
              boxShadow: "0 4px 8px rgba(0, 255, 255, 0.3)",
            }}
          >
            <TfiMenuAlt />
          </IconButton>
        </Menu.Trigger>
        <Portal>
          <Menu.Positioner>
            <Menu.Content>
              {baseRoutesSchema.map((route) => (
                <Menu.Item
                  key={route.label}
                  value={route.path}
                  asChild
                  fontWeight="bold"
                  letterSpacing="tight"
                  color="gray.100"
                  cursor="pointer"
                  rounded="md"
                  _selected={{
                    color: "gray.900",
                  }}
                >
                  <Link to={route.path}>{route.label}</Link>
                </Menu.Item>
              ))}
            </Menu.Content>
          </Menu.Positioner>
        </Portal>
      </Menu.Root>

      {/* Tabs para Tablet e Desktop */}
      <Tabs.Root
        aria-label="Barra de navegação"
        variant="plain"
        fitted
        defaultValue={pathname}
        display={{ base: "none", md: "block" }}
      >
        <Tabs.List bg="gray.800" gap="2" p="1.5" rounded="md" w="md">
          {baseRoutesSchema.map((route) => (
            <Tabs.Trigger
              key={route.label}
              value={route.path}
              fontWeight="bold"
              letterSpacing="tight"
              color="gray.100"
              whiteSpace="nowrap"
              asChild
              _selected={{
                color: "gray.900",
              }}
            >
              <Link to={route.path}>{route.label}</Link>
            </Tabs.Trigger>
          ))}
          <Tabs.Indicator
            rounded="l2"
            bg="cyan.400"
            boxShadow="0 4px 8px rgba(0, 255, 255, 0.3)"
          />
        </Tabs.List>
      </Tabs.Root>
    </>
  );
};
