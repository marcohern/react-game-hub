import { Image, SimpleGrid, Spinner } from "@chakra-ui/react";
import useGameScreenshots from "../hooks/useGameScreenshots";

interface Props {
  id: number;
}

const GameScreenshots = ({ id }: Props) => {
  const { data: screenshots, error, isLoading } = useGameScreenshots(id);

  if (isLoading) return <Spinner />;

  if (error) return null;

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
      {screenshots?.results.map((sc) => (
        <Image key={sc.id} src={sc.image} />
      ))}
    </SimpleGrid>
  );
};

export default GameScreenshots;
