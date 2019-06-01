import { createGlobalStyle, css } from '@xstyled/styled-components'
import { breakpoints } from '@xstyled/system'

export default createGlobalStyle`
 body {
  /* background: #000; */
}
hr {
  border-color: rgba(255, 255, 255, 0.15);
}
#root {
  display: grid;
  grid-template-rows: auto;

  ${breakpoints({
    lg: css`
      grid-template-columns: 85px 1fr 1fr;
      height: 100vh;
    `,
  })}
}
`
