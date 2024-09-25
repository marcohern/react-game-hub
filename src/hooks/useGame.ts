import { useQuery } from "@tanstack/react-query";
import { CACHE_KEY_GAME } from "../constants";
import gameService from "../services/game-service";
import Game from "../models/Game";

const useGame = (slug:string) => {
  return useQuery<Game, Error>({
    queryKey: [CACHE_KEY_GAME, slug],
    queryFn: () =>  gameService.fetch(slug)
  });
}

export default useGame;