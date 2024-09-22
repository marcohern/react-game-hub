import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { Genre } from "./hooks/useGenres";
import { useState } from "react";

function App() {
  const [genreIdFilter, setGenreIdFilter] = useState(0);

  const handleSelectGenre = (genre: Genre) => {
    console.log(genre);
    setGenreIdFilter(genre.id);
  };
  return (
    <Grid
      templateAreas={{
        base: `"nav" "min"`,
        lg: `"nav nav" "aside min"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: `300px 1fr`,
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList onSelectGenre={handleSelectGenre} />
        </GridItem>
      </Show>
      <GridItem area="min">
        <GameGrid genreIdFilter={genreIdFilter} />
      </GridItem>
    </Grid>
  );
}

export default App;
