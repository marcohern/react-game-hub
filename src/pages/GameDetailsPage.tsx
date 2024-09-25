import { Heading, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";

const GameDetailsPage = () => {
  const params = useParams();

  if (!params.slug) throw new Error("Game not found");

  const { data: game, isLoading } = useGame(params.slug);

  if (isLoading) return <Heading>Loading...</Heading>;
  return (
    <>
      <Heading>{game?.name}</Heading>
      <div dangerouslySetInnerHTML={{ __html: game?.description || "" }} />
    </>
  );
};

export default GameDetailsPage;
