import styled, { css } from '@xstyled/styled-components'
import { breakpoints } from '@xstyled/system'

export default styled('div')(
  breakpoints({
    xs: css`
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;
      text-transform: uppercase;
      transition: opacity 200ms ease;
      color: white;
      margin-left: 2;
      opacity: 0.7;
      font-size: 80%;
      cursor: pointer;

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

      ${({ isCurrentItem }) =>
        isCurrentItem &&
        css`
          margin-left: 0;
          border-left: 2;
        `}
    `,
  }),
)
