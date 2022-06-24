import { Flex, Stack, Text } from "@chakra-ui/react";

export function Choice(){
  return (
    <Flex
      mx="auto"
      mt="5rem"
    >
      <Stack>  
        <Text textAlign="center">Vamos nessa?</Text>
        <Text textAlign="center">Então escolha seu continente</Text>
      </Stack>
    </Flex>
  );
}