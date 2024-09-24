import { create } from "zustand";
import GameQuery from "../queries/GameQuery";

interface GameQueryStore {
  gameQuery: GameQuery;
  setSearchText: (searchText: string) => void;
  setGenreId: (genreId:number) => void;
  setPlatformId: (platformId: number) => void;
  clearPlatformId: () => void;
  setSortOrder: (sortOrder: string) => void;
}

const useGameQueryStore = create<GameQueryStore>(set => ({
  gameQuery: {} as GameQuery,
  setSearchText: (searchText: string) => set(() => ({gameQuery: { title: searchText }})),
  setGenreId: (genreId: number) => set(store => ({gameQuery: {...store.gameQuery, genreId: genreId }})),
  setPlatformId: (platformId: number) => set(store => ({gameQuery: {...store.gameQuery, platformId: platformId }})),
  clearPlatformId: () => set(store => ({ gameQuery: {...store.gameQuery, platformId: undefined }})),
  setSortOrder: (sortOrder: string) => set(store => ({gameQuery: {...store.gameQuery, sortOrderSlug: sortOrder }})),
}));

export default useGameQueryStore;