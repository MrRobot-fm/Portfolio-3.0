import { Container } from "@chakra-ui/react";
import { homepageData } from "@/utils/constants/data/homepage";
import { HeroSection } from "@/components/organism/HeroSection/HeroSection";

export default function Home() {
  const { heroBlock } = homepageData;

  return (
    <Container>
      <HeroSection {...heroBlock} />
    </Container>
  );
}
