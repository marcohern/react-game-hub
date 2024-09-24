import {
  Button,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  Show,
  Text,
} from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import useGameQueryStore from "../stores/useGameQueryStore";

const SearchInput = () => {
  const setSearchText = useGameQueryStore((s) => s.setSearchText);
  const ref = useRef<HTMLInputElement>(null);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (ref.current) setSearchText(ref.current.value);
      }}
    >
      <HStack>
        <InputGroup>
          <InputLeftElement children={<BsSearch />} />
          <Input ref={ref} borderRadius={20} _placeholder="Search games..." />;
        </InputGroup>
        <Show above="lg">
          <InputGroup width={100}>
            <Button type="submit" borderRadius={10}>
              <BsSearch />
              <Text paddingLeft={2}>Search</Text>
            </Button>
          </InputGroup>
        </Show>
      </HStack>
    </form>
  );
};

export default SearchInput;
