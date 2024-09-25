import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";
import { motion } from "framer-motion";
interface Props {
  children: ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
  return (
    <Box
      as={motion.div}
      borderRadius={10}
      overflow="hidden"
      whileHover={{ scale: 1.05 }}
    >
      {children}
    </Box>
  );
};

export default GameCardContainer;
