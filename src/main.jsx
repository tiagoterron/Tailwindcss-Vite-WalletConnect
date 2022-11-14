import React from 'react';
import { createRoot } from "react-dom/client";
import { BrowserRouter } from 'react-router-dom';
import './index.scss';
import App from './App';
import { MainChainProvider } from './context/MainChain';

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);


root.render(
  <BrowserRouter>
        <App />
  </BrowserRouter>
);