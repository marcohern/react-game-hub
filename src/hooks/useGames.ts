import { useInfiniteQuery } from "@tanstack/react-query";
import { Genre } from "./useGenres";
import { Platform } from "./usePlatforms";
import gameService from "../services/game-service";
import { CACHE_KEY_GAMES } from "../constants";
import { AxiosRequestConfig } from "axios";

export interface Game {
  id: number;
  slug: string;
  name: string;
  background_image:string;
  parent_platforms: { platform: Platform }[];
  metacritic:number;
  rating_top:number;
}

export interface SortOrder {
  slug: string;
  name: string;
}
export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  title: string;
  sortOrder:SortOrder|null;
  pageSize:number
}

const useGames = (gameQuery: GameQuery) => {

  

  return useInfiniteQuery<Game[], Error>({
    queryKey: [CACHE_KEY_GAMES, gameQuery],
    queryFn: ({pageParam}) => {
      let config:AxiosRequestConfig = {
        params: {
          genres: gameQuery.genre?.id,
          platforms: gameQuery.platform?.id,
          ordering: gameQuery.sortOrder?.slug,
          search: gameQuery.title
        }
      };
      
      //if (pageParam) config.params.page = (pageParam as number - 1)*gameQuery.pageSize;
      
      return gameService.get(config);
    },
    initialPageParam: 1,
    staleTime: 24*60*60*1000,
    placeholderData: (prev) => prev,
    getNextPageParam: (lastPage, allPages) =>
      (lastPage.length > 0) ? allPages.length + 1 : undefined
  });
}

export default useGames;