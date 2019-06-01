import styled, { css, keyframes } from '@xstyled/styled-components'

const imageSize = 500

const backgroundGradient = css`
  background-image: linear-gradient(
    90deg,
    #f4f4f4 0px,
    rgba(229, 229, 229, 0.8) 40px,
    #f4f4f4 80px
  );
`
const shine = keyframes`
	0% {
    background-position: -100px;
  },
  40%, 100% {
    background-position: 140px;
  }
`

const shineImage = keyframes`
	0% {
    background-position: -100px;
  },
  40%, 100% {
    background-position: 140px + ${imageSize};
  }
`

export const DummyImage = styled('div')`
  width: ${imageSize};
  height: ${imageSize};
  animation: ${shineImage} 1s infinite;
  ${backgroundGradient};
`

const Dummy = styled('div')`
  width: ${({ width }) => (width ? `${width}px` : '40px')};
  height: 16px;
  margin-top: 12px;
  border-radius: 2;
  background-size: 600px;
  animation: ${shine} 0.4s infinite;
  ${backgroundGradient};
`
export default Dummy
