import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../hooks/useGames";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  return (
    <Heading margin={3}>
      {gameQuery.platform?.name} {gameQuery.genre?.name} Games
    </Heading>
  );
};

export default GameHeading;
