import { createGlobalStyle, css } from '@xstyled/styled-components'
import { breakpoints } from '@xstyled/system'

export default createGlobalStyle`
hr {
  border-color: borderColor;
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
