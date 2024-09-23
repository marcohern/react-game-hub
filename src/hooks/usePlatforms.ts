import { useQuery } from "@tanstack/react-query";
import { CACHE_KEY_PLATFORM } from "../constants";
import Platform from "../models/Platform";
import platformsService from "../services/platforms-service";
import { Pager } from "../services/api-client";
import ms from "ms";

//const usePlatforms = () => useData<Platform>('/platforms/lists/parents');
const usePlatforms = () => 
  useQuery<Pager<Platform>, Error>({
    queryKey: CACHE_KEY_PLATFORM,
    queryFn: platformsService.getAll,
    staleTime: ms('24h')
  });

export default usePlatforms;