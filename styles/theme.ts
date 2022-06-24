import { extendTheme } from "@chakra-ui/react"

export const theme = extendTheme({
  colors: {
    gray: {
      "heading_text": "#47585B",
    },
    yellow: {
      "highlight": "#FFBA08",
    },
    white: {
      "light": "#F5F8FA",
    }
  },
  fonts:{
    heading: 'Poppins',
    body: 'Poppins'
  },
  styles: {
    global: {
      body: {
        bg: 'white.light',
        color: 'gray.heading_text'
      }
    }
  }
})