import {
  Button,
  HStack,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import SortOrder from "../queries/SortOrder";

interface Props {
  onSelectSortOrder: (sortOrder: SortOrder) => void;
  selectedSortOrderSlug: string | null;
}

const SortSelector = ({ onSelectSortOrder, selectedSortOrderSlug }: Props) => {
  const sortOptions: SortOrder[] = [
    { slug: "", name: "Relevance" },
    { slug: "name", name: "Name" },
    { slug: "-released", name: "Release Date" },
    { slug: "-added", name: "Date added" },
    { slug: "-rating", name: "Popularity" },
    { slug: "-metacritic", name: "Average rating" },
  ];

  const selectedSortOrder = sortOptions.find(
    (s) => s.slug === selectedSortOrderSlug
  );

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        <HStack>
          <Text>Order by: </Text>
          <Text fontWeight="bold">
            {selectedSortOrder?.name || "Relevance"}
          </Text>
        </HStack>
      </MenuButton>
      <MenuList>
        {sortOptions.map((sortOrder) => (
          <MenuItem
            key={sortOrder.slug}
            onClick={() => onSelectSortOrder(sortOrder)}
          >
            {sortOrder.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
