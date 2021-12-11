import React from "react";
import { Stack, Box } from "native-base";

const TesteStack = () => {
  return (
    <Stack alignItems="center" direction="row">
      <Box
        style={{
          width: 20,
          backgroundColor: "#000",
        }}
      >
        teste
      </Box>
      <Box
        style={{
          width: 20,
          backgroundColor: "#000",
        }}
      >
        teste
      </Box>
    </Stack>
  );
};

export default TesteStack;
