import { useQuery } from "@tanstack/react-query";
import { CACHE_KEY_PLATFORM } from "../constants";
import Platform from "../models/Platform";
import platformsService from "../services/platforms-service";
import { Pager } from "../services/api-client";

//const usePlatforms = () => useData<Platform>('/platforms/lists/parents');
const usePlatforms = () => 
  useQuery<Pager<Platform>, Error>({
    queryKey: CACHE_KEY_PLATFORM,
    queryFn: platformsService.getAll,
    staleTime: 24*60*60*1000
  });

export default usePlatforms;