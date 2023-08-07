import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraBaseProvider, ColorModeScript, extendBaseTheme } from '@chakra-ui/react'
import App from './App.tsx'
import theme  from './theme.ts'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraBaseProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode}/>
       <App />
    </ChakraBaseProvider>
  </React.StrictMode>,
)
