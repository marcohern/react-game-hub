interface GameQuery {
  genreId?: number;
  platformId?: number;
  title?: string;
  sortOrderSlug?: string;
  pageSize:number;
  page:number;
}

export default GameQuery;