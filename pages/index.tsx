import { Flex } from "@chakra-ui/react";
import { GetStaticProps } from "next";

import { Banner } from "../components/Banner";
import { Choice } from "../components/Choice";
import Header from "../components/Header";
import Separator from "../components/separator";
import Slider from "../components/Slider";
import { TravelTypes } from "../components/TravelTypes";

interface HomeProps {
  continents:{
    slug: string;
    title: string;
    summary: string;
    image: string;
  }[]
}

export default function Home({continents}: HomeProps) {
  return (
    <Flex direction="column" h="100vh">
      <Header />
      <Banner />
      <TravelTypes />
      <Separator />
      <Choice />
      <Slider/>
    </Flex>
  )
}
