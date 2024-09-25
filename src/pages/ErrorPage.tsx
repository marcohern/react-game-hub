import { Box, Heading, Text } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import NavBar from "../components/NavBar";

const ErrorPage = () => {
  const error = useRouteError();

  console.error("ErrorPage", error);
  return (
    <>
      <NavBar />
      <Box padding={5}>
        <Heading>Yikes!</Heading>
        <Text>
          {isRouteErrorResponse(error)
            ? "This page does not exist"
            : "An unexpected error ocurred"}
        </Text>
      </Box>
    </>
  );
};

export default ErrorPage;
