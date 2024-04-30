import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider } from '@chakra-ui/react'
import {BrowserRouter} from "react-router-dom";
import {RenderProvider} from "./ContextApi/RenderContext"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RenderProvider>
  <BrowserRouter>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </BrowserRouter>
  </RenderProvider>
);

reportWebVitals();
