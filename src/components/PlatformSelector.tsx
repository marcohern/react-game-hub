import { Box, Select } from "@chakra-ui/react";
import usePlatforms, { Platform } from "../hooks/usePlatforms";
import { ChangeEvent } from "react";

interface Props {
  onSelectedPlatform: (platform: Platform | null) => void;
}

const PlatformSelector = ({ onSelectedPlatform }: Props) => {
  const { data: platforms } = usePlatforms();

  const handleSelectPlatform = (event: ChangeEvent<HTMLSelectElement>) => {
    let selectedPlatformId = parseInt(event.target.value);
    let platform = platforms.find((p) => p.id === selectedPlatformId);
    onSelectedPlatform(platform ? platform : null);
  };

  return (
    <Box width={200}>
      <Select onChange={handleSelectPlatform}>
        <option value="0"></option>
        {platforms.map((platform) => (
          <option key={platform.id} value={platform.id}>
            {platform.name}
          </option>
        ))}
      </Select>
    </Box>
  );
};

export default PlatformSelector;
