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

interface Props {
  onSearchByTitle: (title: string) => void;
}

const SearchInput = ({ onSearchByTitle }: Props) => {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (ref.current) onSearchByTitle(ref.current.value);
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
