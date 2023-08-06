import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraBaseProvider, extendBaseTheme } from '@chakra-ui/react'
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraBaseProvider></ChakraBaseProvider>
      <App />
  </React.StrictMode>,
)
