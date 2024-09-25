import { Heading, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";

const GameDetailsPage = () => {
  const { slug } = useParams();

  if (!slug) throw new Error("Game not found");

  const { data: game, isLoading } = useGame(slug);

  if (isLoading) return <Heading>Loading...</Heading>;

  return (
    <>
      <Heading>{game?.name}</Heading>
      <Text>{game?.description_raw}</Text>
    </>
  );
};

export default GameDetailsPage;
