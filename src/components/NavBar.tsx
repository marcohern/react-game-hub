import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
  onSearchByTitle: (title: string) => void;
}

const NavBar = ({ onSearchByTitle }: Props) => {
  return (
    <HStack padding="10px">
      <Image src={logo} boxSize="60px" />
      <SearchInput onSearchByTitle={onSearchByTitle} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
