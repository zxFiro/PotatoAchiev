import type { NextPage } from "next";
import { Center } from "@chakra-ui/react";
import AchievLoad from "@/components/achievements/achievLoad";

const Home: NextPage = () => {
  return (
    <Center w="1900px" h="900px">
      <AchievLoad />
    </Center>
  );
};

export default Home;
