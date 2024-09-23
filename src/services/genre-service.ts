import { Genre } from "../hooks/useGenres";
import ApiClient from "./api-client";

export default new ApiClient<Genre>('/genres');