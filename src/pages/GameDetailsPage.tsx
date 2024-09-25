import { Heading, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import ExpandableText from "../components/ExpandableText";
import Attribute from "../components/Attribute";
import CriticScore from "../components/CriticScore";

const GameDetailsPage = () => {
  const { slug } = useParams();

  const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading) return <Spinner />;

  if (error || !game) throw error;

  return (
    <>
      <Heading>{game.name}</Heading>
      <ExpandableText>{game.description_raw}</ExpandableText>
      <SimpleGrid as="dl" columns={2} spacing={2}>
        <Attribute title="Platforms">
          {game.parent_platforms.map((p) => (
            <Text as="dd" key={p.platform.id}>
              {p.platform.name}
            </Text>
          ))}
        </Attribute>
        <Attribute title="Metascore">
          <CriticScore score={game.metacritic} />
        </Attribute>
        <Attribute title="Genres">
          {game.genres.map((g) => (
            <Text as="dd" key={g.id}>
              {g.name}
            </Text>
          ))}
        </Attribute>
        <Attribute title="Publishers">
          {game.publishers.map((p) => (
            <Text as="dd" key={p.id}>
              {p.name}
            </Text>
          ))}
        </Attribute>
      </SimpleGrid>
    </>
  );
};

export default GameDetailsPage;
