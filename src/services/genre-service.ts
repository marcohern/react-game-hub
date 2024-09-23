import Genre from "../models/Genre";
import ApiClient from "./api-client";

export default new ApiClient<Genre>('/genres');