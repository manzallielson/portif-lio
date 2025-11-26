import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import './i18n/config'
import App from './App'
import { ThemeProvider } from './contexts/ThemeContext'

// Função para criar tema
function getTheme() {
  return extendTheme({
    config: {
      initialColorMode: 'light',
      useSystemColorMode: false,
    },
    colors: {
      black: {
        50: '#f5f5f5',
        100: '#e0e0e0',
        200: '#b3b3b3',
        300: '#808080',
        400: '#4d4d4d',
        500: '#1a1a1a',
        600: '#000000',
        700: '#000000',
        800: '#000000',
        900: '#000000',
      },
    },
  })
}

const theme = getTheme()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </ThemeProvider>
  </React.StrictMode>,
)

