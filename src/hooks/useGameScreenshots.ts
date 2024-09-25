
import { useQuery } from "@tanstack/react-query";
import { CACHE_KEY_GAME_SCREENSHOTS } from "../constants";
import ApiClient, { Pager } from "../services/api-client";
import Screenshot from "../models/Screenshot";

const useGameScreenshots = (id:number) => {
  const screenshotSevice = new ApiClient<Screenshot>(`games/${id}/screenshots`);

  return useQuery<Pager<Screenshot>, Error>({
    queryKey: [CACHE_KEY_GAME_SCREENSHOTS, id],
    queryFn: screenshotSevice.getAll
  });
}

export default useGameScreenshots;