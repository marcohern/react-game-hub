import { Game } from "../hooks/useGames";
import ApiClient from "./api-client";

export default new ApiClient<Game>('/games');