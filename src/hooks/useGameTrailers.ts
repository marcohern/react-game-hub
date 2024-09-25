
import { CACHE_KEY_GAME_TRAILERS } from "../constants";
import { useQuery } from "@tanstack/react-query";
import Trailer from "../models/Trailer";
import ApiClient, { Pager } from "../services/api-client";

const useGameTrailers = (id:number) => {
  const trailerSevice = new ApiClient<Trailer>(`games/${id}/movies`);

  return useQuery<Pager<Trailer>, Error>({
    queryKey: [CACHE_KEY_GAME_TRAILERS, id],
    queryFn: () => trailerSevice.getAll()
  });
}

export default useGameTrailers;