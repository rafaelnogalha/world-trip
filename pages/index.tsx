import { Flex } from "@chakra-ui/react";

import { Banner } from "../components/Banner";
import { Choice } from "../components/Choice";
import { Header } from "../components/Header";
import { Carousel } from "../components/Carousel";
import { TravelTypes } from "../components/TravelTypes";


export default function Home() {
  return (
    <Flex direction="column" h="100vh">
      <Header />
      <Banner />
      <TravelTypes />
      <Choice />
      <Carousel />
    </Flex>
  )
}
