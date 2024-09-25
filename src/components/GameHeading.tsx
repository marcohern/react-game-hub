import { Heading } from "@chakra-ui/react";
import usePlatform from "../hooks/usePlatform";
import useGenre from "../hooks/useGenre";
import useGamesQueryStore from "../stores/useGamesQueryStore";

const GameHeading = () => {
  const genreId = useGamesQueryStore((s) => s.gameQuery.genreId);
  const genre = useGenre(genreId);

  const platformId = useGamesQueryStore((s) => s.gameQuery.platformId);
  const platform = usePlatform(platformId);

  return (
    <Heading as="h1" marginBottom={5} fontSize="5xl">
      {platform?.name} {genre?.name} Games
    </Heading>
  );
};

export default GameHeading;
