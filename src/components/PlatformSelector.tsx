import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import usePlatforms from "../hooks/usePlatforms";
import { BsChevronDown } from "react-icons/bs";
import usePlatform from "../hooks/usePlatform";
import useGamesQueryStore from "../stores/useGamesQueryStore";

const PlatformSelector = () => {
  const selectedPlatformId = useGamesQueryStore((s) => s.gameQuery.platformId);
  const clearPlatformId = useGamesQueryStore((s) => s.clearPlatformId);
  const setPlatformId = useGamesQueryStore((s) => s.setPlatformId);

  const { data: platforms, error } = usePlatforms();
  const selectedPlatform = usePlatform(selectedPlatformId);

  if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name ?? "Platform"}
      </MenuButton>
      <MenuList>
        <MenuItem onClick={() => clearPlatformId()}>*All Platforms</MenuItem>
        {platforms?.results.map((platform) => (
          <MenuItem
            key={platform.id}
            onClick={() => setPlatformId(platform.id)}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
