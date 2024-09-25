interface GameDetail {
  id: number;
  slug: string;
  name: string;
  name_original: string;
  description: string;
  description_raw: string;
  metacritic: number;
  tba: boolean;
  rating: number;
  rating_top: number;
}

export default GameDetail;