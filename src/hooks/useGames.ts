import { useInfiniteQuery } from "@tanstack/react-query";
import gameService from "../services/game-service";
import { CACHE_KEY_GAMES } from "../constants";
import GameQuery from "../queries/GameQuery";
import Game from "../models/Game";
import { Pager } from "../services/api-client";

const useGames = (gameQuery: GameQuery) => {
  
  return useInfiniteQuery<Pager<Game>, Error>({
    queryKey: [CACHE_KEY_GAMES, gameQuery],
    queryFn: ({pageParam}) =>  gameService.get({
      params: {
          genres: gameQuery.genre?.id,
          parent_platforms: gameQuery.platform?.id,
          ordering: gameQuery.sortOrder?.slug,
          search: gameQuery.title,
          page_size: 4*3*2,
          page: pageParam
        }
      }),
    initialPageParam: 1,
    staleTime: 24* 60 * 60 * 1000, //24h
    //placeholderData: (prev) => prev,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined
    }
  });
}

export default useGames;