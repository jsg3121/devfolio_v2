import { createGlobalStyle } from 'styled-components'
import { reset } from 'styled-reset'

export const GlobalStyle = createGlobalStyle`
    ${reset}
    :focus {
        outline: none;
        border: none;
    }
    ::-webkit-scrollbar {
        display: none;
    }
    img, svg{
        pointer-events : none;
    }
    img, svg, body {
        -webkit-user-select:none;
        -webkit-user-drag: none;
        -moz-user-select:none;
        -ms-user-select:none;
        user-select:none
    }
    html,body{
        font-size: 18px;
        -webkit-text-size-adjust: none;
        font-family: sans-serif,-apple-system,BlinkMacSystemFont,helvetica,Apple SD Gothic Neo;       
        font-display: fallback;
        -ms-overflow-style: none;
        scrollbar-width: none;
        min-height:100vh;
        width: 100%;
        background-color: #ffffff;
        scroll-behavior: smooth;
        overflow-x: hidden;
    }
    
    body {
        position: relative;
        height: 100vh;
    }

    button {
        background: none;
        padding: 0;
        border: none;
        cursor: pointer;
        box-sizing: border-box;
        &:disabled {
            cursor: default;
            fill: #f2f3f4;
        }
    }
    a {
        text-decoration: none;
    }

    figure {
        width: 100%;
        height:100%;
        position: relative;
    }

    html.project__detail--show{
        overflow: hidden !important;
    }

    * {
        -webkit-tap-highlight-color: transparent !important;
         box-sizing: border-box;
    }

    h1,h2,h3,h4,h5,h6,p,span,textarea {
        font-family: sans-serif,-apple-system,BlinkMacSystemFont,helvetica,Apple SD Gothic Neo;       
        color: #333333;
    }

    @media screen and (min-width: 1281px) {
        html,
        body {
            font-size: calc(max(18px, 1vw));
        }
    }
    @media screen and (min-width: 960px) and (max-width: 1280px) {
        html,
        body {
            font-size: 16px;
        }
    }
    @media screen and (min-width: 680px) and (max-width: 959px) {
        html,
        body {
            font-size: 14px;
        }
    }
    @media screen and (max-width: 679px) {
        html,
        body {
            font-size: 12px;
        }
    }
    /* @media screen and (max-width: 479px) {
        html, body {
            font-size : 11px;
        }
    } */
`
