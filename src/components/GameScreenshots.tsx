import { Image, SimpleGrid } from "@chakra-ui/react";
import useGameScreenshots from "../hooks/useGameScreenshots";

interface Props {
  id: number;
}

const GameScreenshots = ({ id }: Props) => {
  const { data: screenshots, error } = useGameScreenshots(id);

  if (error) return null;

  return (
    <SimpleGrid columns={{ sm: 1, md: 2, lg: 2, xl: 2 }} spacing={5}>
      {screenshots?.results.map((sc) => (
        <Image key={sc.id} src={sc.image} />
      ))}
    </SimpleGrid>
  );
};

export default GameScreenshots;
