import { useQuery } from "@tanstack/react-query";
import { CACHE_KEY_GENRE } from "../constants";
import genreService from "../services/genre-service";

export interface Genre {
  id:number;
  name:string;
  image_background:string;
}

//const useGenres = () => ({ data:genres, isLoading:false, error:null });
const useGenres = () => 
  useQuery<Genre[], Error>({
    queryKey: CACHE_KEY_GENRE,
    queryFn: genreService.getAll,
    staleTime: 24*60*60*1000
  });

export default useGenres;