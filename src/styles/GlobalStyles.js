import { createGlobalStyle } from 'styled-components';

// Typography
import '@fontsource/poppins';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';
import '@fontsource/poppins/800.css';
import themeList from '../data/themeList';

const GlobalSryles = createGlobalStyle`
    :root{
        /* colors */
        --darkBlue_1: #3b447a;
        --darkBlue_2: #222b5f;
        --darkBlue_3: #0a0f19;
        --darkBlue_4: #101826;
        --mediumStateBlue: #6c62e2;
        --lightBlue_1: #f3f1fe;
        --lightBlue_2: #adbde3;
        --white: #ffffff;
        --black: #000000;

        /* others */
        --header-height: 50px;
    }

    html{
        font-size: 10px;
    }

    body{
        background-color: ${({ theme: { theme } }) =>
          theme === themeList.light
            ? 'var(--lightBlue_1)'
            : 'var(--darkBlue_3)'} ;
        font-family: 'Poppins', sans-serif;
    }

    *, *::after{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    a{
        text-decoration: none;
        cursor: pointer;

    }

    ul, li{
        list-style: none;
    }

    .container{
        max-width: 1200px;
        width: 90%;
        margin: 0 auto;
    }

    img, svg{
        width: 100%;
        height: 100%;
    }
`;

export default GlobalSryles;
