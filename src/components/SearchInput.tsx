import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

interface Props {
  onSearchByTitle: (title: string) => void;
}

const SearchInput = ({ onSearchByTitle }: Props) => {
  return (
    <InputGroup>
      <InputLeftElement children={<BsSearch />} />
      <Input
        borderRadius={20}
        _placeholder="Search games..."
        onKeyDown={(event) => {
          let input = event.target as HTMLInputElement;
          if (event.code === "Enter") onSearchByTitle(input.value);
        }}
      />
      ;
    </InputGroup>
  );
};

export default SearchInput;
