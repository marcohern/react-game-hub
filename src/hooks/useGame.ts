import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import { CACHE_KEY_GAME } from "../constants";
import GameDetail from "../models/GameDetail";
import gameService from "../services/game-service";

const useGame = (slug:string) => {
  return useQuery<GameDetail, Error>({
    queryKey: [CACHE_KEY_GAME, slug],
    queryFn: () =>  gameService.fetch(slug),
    staleTime: ms('24h')
  });
}

export default useGame;