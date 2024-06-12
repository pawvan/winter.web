import "#/styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider, background } from '@chakra-ui/react'
import { fonts } from "./lib/font";
import {
  ChakraBaseProvider,
  extendBaseTheme,
  theme as chakraTheme,
} from '@chakra-ui/react'
import { Chakra } from "#/chakra";
const { Button } = chakraTheme.components
;

import { Box } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { extendTheme, type ThemeConfig } from '@chakra-ui/react'
// 2. Add your color mode config
import { mode } from '@chakra-ui/theme-tools';
const styles = {
  global: (props)=> ({
    body: {
      color: mode('gray.800', 'whiteAlpha.900')(props),
      bg: mode('gray.100', '#141214')(props),
    },
  }),
};
const theme:ThemeConfig = extendTheme({

  styles,
});


export default function App({ Component, pageProps }: AppProps)
 {
  return( 
<>
<style jsx global>
        {`
          :root {
            --font-rubik: ${fonts.rubik.style.fontFamily};
          }
        `}
      </style>

  <ChakraProvider    theme={theme}>
  
  
      
      <Component {...pageProps}   />

  
  </ChakraProvider>


</>);
}
