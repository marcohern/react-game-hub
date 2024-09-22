import useData from "./useData";
import { Genre } from "./useGenres";
import { Platform } from "./usePlatforms";

export interface Game {
  id: number;
  slug: string;
  name: string;
  background_image:string;
  parent_platforms: { platform: Platform }[];
  metacritic:number;
}

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
}

const useGames = (gameQuery: GameQuery) => {

return useData<Game>('/games', {params: {genres: gameQuery.genre?.id, platforms: gameQuery.platform?.id }}, [gameQuery]);

}

export default useGames;