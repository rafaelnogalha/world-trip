import { Flex, Stack,Text, Image, Grid, GridItem, Box } from "@chakra-ui/react";

export function TravelTypes(){
  return (
    <Flex
      mt="5rem"
      mx="auto"
    >
      <Stack
        direction="row"
        spacing="6.5rem"
      >
        <Box>
          <Image mx="auto" src="cocktail.svg" w={["50px", "80px", "70px", "70px"]}/>
          <Text fontWeight="500" mt="1rem">vida noturna</Text>
        </Box>
        <Box>
          <Image mx="auto" src="surf.svg" w={["50px", "80px", "70px", "70px"]}/>
          <Text fontWeight="500" mt="1rem">praia</Text>
        </Box>
        <Box>        
          <Image mx="auto" src="building.svg" w={["50px", "80px", "70px", "70px"]}/>
          <Text fontWeight="500" mt="1rem">moderno</Text>
        </Box>
        <Box>
          <Image mx="auto" src="museum.svg" w={["50px", "80px", "70px", "70px"]}/>
          <Text fontWeight="500" mt="1rem">clássico</Text>
        </Box>
        <Box>
          <Image mx="auto" src="earth.svg" w={["50px", "80px", "70px", "70px"]}/>
          <Text fontWeight="500" mt="1rem">e mais...</Text>
        </Box>
      </Stack>
      
    </Flex>
  )
}