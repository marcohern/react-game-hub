import { Box, GridItem, HStack, Show } from "@chakra-ui/react";
import GenreList from "../components/GenreList";
import GameHeading from "../components/GameHeading";
import PlatformSelector from "../components/PlatformSelector";
import GameGrid from "../components/GameGrid";

const HomePage = () => {
  return (
    <>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList />
        </GridItem>
      </Show>
      <GridItem area="main">
        <Box paddingLeft={3}>
          <GameHeading />
          <HStack>
            <HStack>
              <PlatformSelector />
            </HStack>
          </HStack>
        </Box>
        <GameGrid />
      </GridItem>
    </>
  );
};

export default HomePage;
