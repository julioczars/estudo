import * as React from "react"
import { RoutesApp } from "./routes"
import {
  Box,
  ChakraProvider,
} from "@chakra-ui/react"

import { theme } from "./theme"

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box>
      <RoutesApp />
    </Box>
  </ChakraProvider>
)
