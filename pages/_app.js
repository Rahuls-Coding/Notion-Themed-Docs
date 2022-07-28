import '../styles/globals.css'
import { MantineProvider } from '@mantine/core';
import { ThemeProvider } from 'next-themes'

function MyApp({ Component, pageProps }) {
  return <MantineProvider withGlobalStyles withNormalizeCSS theme={{fontFamily: 'PT Serif, sans-serif',
}}> <ThemeProvider> <Component {...pageProps} /> </ThemeProvider> </MantineProvider>
}

export default MyApp
