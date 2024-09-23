import { useInfiniteQuery } from "@tanstack/react-query";
import gameService from "../services/game-service";
import { CACHE_KEY_GAMES } from "../constants";
import { AxiosRequestConfig } from "axios";
import GameQuery from "../queries/GameQuery";
import Game from "../models/Game";

const useGames = (gameQuery: GameQuery) => {
  const exportGameQueryKey = () => {
    let key = 'gk';
    key += '-' + ((gameQuery.genre) ? gameQuery.genre.id : '__allGenres');
    key += '-' + ((gameQuery.platform) ? gameQuery.platform.id : '__allPlatforms');
    key += '-' + ((gameQuery.sortOrder) ? gameQuery.sortOrder.slug : '__defaultSort');
    key += '-' + ((gameQuery.title) ? gameQuery.title : '__anyTitle');
    return key;
  };

  return useInfiniteQuery<Game[], Error>({
    queryKey: [CACHE_KEY_GAMES, exportGameQueryKey()],
    queryFn: ({pageParam}) => {
      let config:AxiosRequestConfig = {
        params: {
          genres: gameQuery.genre?.id,
          parent_platforms: gameQuery.platform?.id,
          ordering: gameQuery.sortOrder?.slug,
          search: gameQuery.title,
          page_size: 4*3*2
        }
      };
      
      if (pageParam) config.params.page = pageParam;
      
      return gameService.get(config);
    },
    initialPageParam: 1,
    staleTime: 1*60*1000,
    placeholderData: (prev) => prev,
    getNextPageParam: (lastPage, allPages) =>
      (lastPage.length > 0) ? allPages.length + 1 : undefined
  });
}

export default useGames;