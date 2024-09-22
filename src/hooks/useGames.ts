import useData from "./useData";

export interface Platform {
  id: number;
  name:string;
  slug:string;
}
export interface Game {
  id: number;
  slug: string;
  name: string;
  background_image:string;
  parent_platforms: { platform: Platform }[];
  metacritic:number;
}

const useGames = (genreIdFilter:number) => {

return useData<Game>('/games', {params: {genres: genreIdFilter === 0 ? null:genreIdFilter}}, [genreIdFilter]);

}

export default useGames;