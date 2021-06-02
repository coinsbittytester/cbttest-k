import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    background-image: ${({ theme }) => (theme.isDark ? 'url(/images/dark-bg.jpg)' : 'url(/images/light-bg.jpg)' )};
    background-repeat: no-repeat fixed;
    background-image: fit;
    background-size: cover;
    img {
      height: auto;
      max-width: 100%;
    }
  }

  ul {
    list-style: none; 
  }

  li {
    display: flex;
    align-items: center;
  }

  li::before {
    content: "•";
    color: ${({ theme }) => theme.colors.primary};
    margin-right: 8px;
  }
`

export default GlobalStyle
