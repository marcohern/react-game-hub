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

const useGames = (selectedGenre:Genre|null, selectedPlatform:Platform|null) => {

return useData<Game>('/games', {params: {genres: selectedGenre?.id, platforms: selectedPlatform?.id }}, [selectedGenre, selectedPlatform]);

}

export default useGames;