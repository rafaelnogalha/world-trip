import { Box, Flex } from "@chakra-ui/react"
import { Logo } from "./Logo";

export function Header() {
  return (
    <Flex
      as = "header"
      w = "100%"
      maxWidth={1480}
      h="20"
      mx="auto"
      px="6"
      align="center"
      bg="white.light"
    >
      <Flex mx="auto">
        <Logo />
      </Flex>
    </Flex>
  );
}