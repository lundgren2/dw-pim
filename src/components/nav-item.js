import styled, { css } from '@xstyled/styled-components'
import { breakpoints } from '@xstyled/system'

export default styled('div')(
  breakpoints({
    xs: css`
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      flex-direction: column;
      text-transform: uppercase;
      font-size: 80%;
      opacity: 0.7;
      cursor: pointer;
      transition: all 400ms ease;
      margin-left: 2;

      &:hover {
        opacity: 1;
      }

      svg {
        margin-bottom: 1;
      }
    `,
    lg: css`
      height: 60px;
      margin-top: 2;
      &.selected {
        margin-left: 0;
        border-left: 2;
      }
    `,
  }),
)
