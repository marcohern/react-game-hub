import { Platform } from "../hooks/usePlatforms";
import ApiClient from "./api-client";

export default new ApiClient<Platform>('/platforms/lists/parents')