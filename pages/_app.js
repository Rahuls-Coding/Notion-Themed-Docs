import '../styles/globals.css'
import { MantineProvider } from '@mantine/core';
import { ThemeProvider } from 'next-themes'


function MyApp({ Component, pageProps }) {
 

  return <ThemeProvider> <MantineProvider  withGlobalStyles withNormalizeCSS theme={{fontFamily: 'PT Serif, sans-serif',
}}> <Component {...pageProps} /> </MantineProvider> </ThemeProvider>
}

export default MyApp
