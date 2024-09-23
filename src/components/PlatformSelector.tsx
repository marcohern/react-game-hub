import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import usePlatforms, { Platform } from "../hooks/usePlatforms";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  onSelectPlatform: (platform: Platform | null) => void;
  selectedPlatform: Platform | null;
}

const PlatformSelector = ({ onSelectPlatform, selectedPlatform }: Props) => {
  const { data: platforms, error } = usePlatforms();

  if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name ?? "Platform"}
      </MenuButton>
      <MenuList>
        <MenuItem onClick={() => onSelectPlatform(null)}>
          *All Platforms
        </MenuItem>
        {platforms?.map((platform) => (
          <MenuItem
            key={platform.id}
            onClick={() => onSelectPlatform(platform)}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
