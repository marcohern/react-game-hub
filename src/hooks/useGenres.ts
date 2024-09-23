import { useQuery } from "@tanstack/react-query";
import { CACHE_KEY_GENRE } from "../constants";
import genreService from "../services/genre-service";
import Genre from "../models/Genre";
import { Pager } from "../services/api-client";
import ms from "ms";

//const useGenres = () => ({ data:genres, isLoading:false, error:null });
const useGenres = () => 
  useQuery<Pager<Genre>, Error>({
    queryKey: CACHE_KEY_GENRE,
    queryFn: genreService.getAll,
    staleTime: ms('24h') //24h
  });

export default useGenres;