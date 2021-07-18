import { createGlobalStyle } from 'styled-components'
// eslint-disable-next-line import/no-unresolved
import { PancakeTheme } from '@blzd-dev/uikit'

declare module 'styled-components' {
  /* eslint-disable @typescript-eslint/no-empty-interface */
  export interface DefaultTheme extends PancakeTheme {}
}

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Rubik', sans-serif;
  }
  body {
    background-color: #000000;
    img {
      height: auto;
      max-width: 100%;
    }
  }
`

export default GlobalStyle
