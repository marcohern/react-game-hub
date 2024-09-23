import { useQuery } from "@tanstack/react-query";
import { CACHE_KEY_PLATFORM } from "../constants";
import platformsService from "../services/platforms-service";

export interface Platform {
  id: number;
  name:string;
  slug:string;
}

//const usePlatforms = () => useData<Platform>('/platforms/lists/parents');
const usePlatforms = () => 
  useQuery<Platform[], Error>({
    queryKey: CACHE_KEY_PLATFORM,
    queryFn: platformsService.getAll,
    staleTime: 24*60*60*1000
  });

export default usePlatforms;