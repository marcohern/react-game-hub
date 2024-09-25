import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  children: string;
}

const ExpandableText = ({ children }: Props) => {
  const [expandText, setExpandText] = useState(false);
  const limit = 100;

  if (!children) return null;

  if (children.length <= limit) return <Text>{children}</Text>;

  return (
    <>
      <Text>
        {expandText ? children : children.substring(0, limit) + "..."}{" "}
        <Button
          onClick={() => setExpandText(!expandText)}
          colorScheme="yellow"
          fontWeight="bold"
          borderRadius={10}
          marginLeft={1}
          size="xs"
        >
          {expandText ? "Show Less" : "Show More"}
        </Button>
      </Text>
    </>
  );
};

export default ExpandableText;
