import { extendTheme } from "@chakra-ui/core";

const theme = extendTheme({
  colors: {
    bg: {
      gray: "#E4E6EB"
    }
  },
  radii: {
    card: {
      default: "1rem"
    }
  }
})

export default theme