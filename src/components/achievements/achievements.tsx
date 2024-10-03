import {
  Center,
  Button,
  Text,
  useDisclosure,
  Flex,
  Spacer,
  HStack,
} from "@chakra-ui/react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  ModalOverlay,
} from "@chakra-ui/react";
import { Grid, GridItem, VStack, IconButton } from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import type { Sample1, Objective } from "@/datasamples/sample1Type";
import AchievProxy from "./achievProxy";
import { useSnapshot } from "valtio";

const SingleItem = ({ objective }: { objective: Array<Objective> }) => {
  let rowcolor = ["teal", "teal.300"];
  return (
    <Grid templateColumns="repeat(1, 1fr)" gap={0.5}>
      {objective.map((item, i) => (
        <GridItem
          key={"GridItemAcPaFR" + i}
          w="100%"
          h="70px"
          bg={rowcolor[i % 2]}
          color="white"
        >
          <Text>
            You have completed {item.completed} tasks of a total of {item.total}
            , while {item.comparison}% have completed all tasks
          </Text>
        </GridItem>
      ))}
    </Grid>
  );
};

const Itemlist = ({ sample }: { sample: Sample1 }) => {
  const {} = useDisclosure();
  return (
    <Grid templateColumns="repeat(4, 1fr)" gap={0.5}>
      {sample.sample.map((item, i) => (
        <GridItem
          key={"GridItemAcPaFR" + i}
          w="100%"
          h="70px"
          bg="teal"
          color="white"
          onClick={() => {
            AchievProxy.state = true;
            AchievProxy.item = i;
          }}
        >
          <VStack key={"StackAcPaFR" + i} p={0.5}>
            <Text>{item.name}</Text>
            <Text>{item.progress + "%"}</Text>
          </VStack>
        </GridItem>
      ))}
    </Grid>
  );
};

const Panels = ({ sample }: { sample: Sample1 }) => {
  let a: Number = sample.sample.length;
  const snap = useSnapshot(AchievProxy);
  return snap.state ? (
    <SingleItem objective={sample.sample[snap.item].objetive} />
  ) : (
    <Itemlist sample={sample} />
  );
};

export const Achievements = ({ sample }: { sample: Sample1 }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const snap = useSnapshot(AchievProxy);

  return (
    <Center>
      <Button
        bg="teal"
        borderRadius="md"
        w="130px"
        p={3}
        color="white"
        onClick={() => {
          onOpen();
          AchievProxy.state = false;
        }}
      >
        Achievements
      </Button>
      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        <ModalOverlay
          bg="none"
          backdropFilter="auto"
          backdropInvert="80%"
          backdropBlur="2px"
        />
        <ModalContent>
          <HStack spacing="45%">
            <ModalHeader>Achievements</ModalHeader>
            {snap.state ? (
              <IconButton
                aria-label="Call Segun"
                size="lg"
                icon={<ArrowBackIcon />}
                onClick={() => {
                  AchievProxy.state = false;
                }}
              />
            ) : (
              <ModalCloseButton />
            )}
          </HStack>
          <ModalBody>
            <Panels sample={sample} />
          </ModalBody>
          <ModalFooter>
            <></>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Center>
  );
};

export default Achievements;
