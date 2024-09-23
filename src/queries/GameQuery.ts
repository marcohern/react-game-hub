import Genre from "../models/Genre";
import Platform from "../models/Platform";
import SortOrder from "./SortOrder";

interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  title: string;
  sortOrder:SortOrder|null;
  pageSize:number;
}

export default GameQuery;