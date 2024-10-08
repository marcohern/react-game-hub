import Platform from "./Platform";

interface Game {
  id: number;
  slug: string;
  name: string;
  background_image:string;
  description_raw: string;
  parent_platforms: { platform: Platform }[];
  metacritic:number;
  rating_top:number;
  platforms:{platform: Platform }[];
  publishers:{id: number, name:string }[];
  genres:{id: number, name:string }[];
}

export default Game;