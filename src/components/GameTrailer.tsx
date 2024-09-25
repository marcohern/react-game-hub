import { Box } from "@chakra-ui/react";
import useGameTrailers from "../hooks/useGameTrailers";

interface Props {
  id: number;
}
const GameTrailer = ({ id }: Props) => {
  const { data } = useGameTrailers(id);

  const first = data?.results[0];
  if (!first) return null;

  console.log("GameTrailer", data);
  return (
    <Box marginY={3}>
      <video
        controls
        width="480px"
        src={first.data["480"]}
        poster={first.preview}
      ></video>
    </Box>
  );
};

export default GameTrailer;
