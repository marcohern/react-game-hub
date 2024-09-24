import { Heading } from "@chakra-ui/react";
import usePlatform from "../hooks/usePlatform";
import useGenre from "../hooks/useGenre";
import useGameQueryStore from "../stores/useGameQueryStore";

const GameHeading = () => {
  const { gameQuery } = useGameQueryStore();

  const genre = useGenre(gameQuery.genreId);
  const platform = usePlatform(gameQuery.platformId);

  return (
    <Heading as="h1" marginBottom={5} fontSize="5xl">
      {platform?.name} {genre?.name} Games
    </Heading>
  );
};

export default GameHeading;
