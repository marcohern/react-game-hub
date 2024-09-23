import Game from "../models/Game";
import ApiClient from "./api-client";

export default new ApiClient<Game>('/games');