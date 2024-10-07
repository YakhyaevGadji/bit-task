import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './app/App.tsx'
import {createGlobalStyle} from "styled-components";
import {Provider} from "react-redux";
import {store} from "./redux/store.ts";

const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        border: none;
    }

    body {
        background-color: #3a3a3a;
    }

    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

    /* Links */

    a, a:link, a:visited {
        text-decoration: none;
    }

    a:hover {
        text-decoration: none;
    }

    /* Common */

    aside, nav, footer, header, section, main {
        display: block;
    }

    ul, ul li {
        list-style: none;
    }

    img {
        vertical-align: top;
    }

    img, svg {
        max-width: 100%;
        height: auto;
    }

    address {
        font-style: normal;
    }

    /* Form */

    input, textarea, button, select {
        font-family: inherit;
        font-size: inherit;
        color: inherit;
        background-color: transparent;
    }

    input::-ms-clear {
        display: none;
    }

    button, input[type="submit"] {
        display: inline-block;
        box-shadow: none;
        background-color: transparent;
        background: none;
        cursor: pointer;
    }

    input:focus, input:active,
    button:focus, button:active {
        outline: none;
    }

    button::-moz-focus-inner {
        padding: 0;
        border: 0;
    }

    label {
        cursor: pointer;
    }

    legend {
        display: block;
    }
`;

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <Provider store={store}>
        <GlobalStyle/>
        <App />
      </Provider>
  </StrictMode>,
)
