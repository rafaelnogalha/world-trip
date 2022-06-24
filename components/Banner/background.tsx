import { Image } from "@chakra-ui/react";

export function Background() {
  return(
    <Image   
      w="100%"
      h={["163px", "250px", "250px", "335px"]}
      src="banner.jpg"
      bgPosition={["100% 20%","100% 20%","100% 30%"]}
      bgRepeat="no-repeat"
      bgSize="cover"
    />
  );
}