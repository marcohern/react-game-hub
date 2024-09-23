import Platform from "../models/Platform";
import ApiClient from "./api-client";

export default new ApiClient<Platform>('/platforms/lists/parents')