import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";
import GameQuery from "./queries/GameQuery";

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({
    page: 1,
  } as GameQuery);

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: `300px 1fr`,
      }}
    >
      <GridItem area="nav">
        <NavBar
          onSearchByTitle={(title: string) =>
            setGameQuery({ ...gameQuery, title: title })
          }
        />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList
            onSelectGenre={(genre) =>
              setGameQuery({ ...gameQuery, genreId: genre.id })
            }
            selectedGenreId={gameQuery.genreId}
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <Box paddingLeft={3}>
          <GameHeading gameQuery={gameQuery} />
          <HStack>
            <HStack>
              <PlatformSelector
                onSelectPlatform={(platform) =>
                  setGameQuery({
                    ...gameQuery,
                    platformId: platform?.id,
                  })
                }
                selectedPlatformId={gameQuery.platformId}
              />
              <SortSelector
                onSelectSortOrder={(sortOrder) =>
                  setGameQuery({ ...gameQuery, sortOrderSlug: sortOrder.slug })
                }
                selectedSortOrderSlug={gameQuery.sortOrderSlug ?? ""}
              ></SortSelector>
            </HStack>
          </HStack>
        </Box>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
