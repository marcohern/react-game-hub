import useGameTrailers from "../hooks/useGameTrailers";

interface Props {
  id: number;
}
const GameTrailer = ({ id }: Props) => {
  const { data, error, isLoading } = useGameTrailers(id);

  const first = data?.results[0];
  if (!first) return null;

  console.log("GameTrailer", data);
  return (
    <video
      controls
      width="480px"
      src={first.data["480"]}
      poster={first.preview}
    ></video>
  );
};

export default GameTrailer;
