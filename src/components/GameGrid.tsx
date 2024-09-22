import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames, { GameQuery } from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const { data: games, error, isLoading } = useGames(gameQuery);

  const skeletons = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32,
  ];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        spacing={6}
        padding={3}
      >
        {!isLoading &&
          games.map((game) => (
            <GameCardContainer key={game.id}>
              <GameCard game={game} />
            </GameCardContainer>
          ))}
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer key={"gk" + skeleton}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
