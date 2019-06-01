import React from 'react'
import styled from '@xstyled/styled-components'
import useProductImage from '../hooks/useProductImage'
import { DummyImage } from './dummy-item'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;

  img {
    align-self: center;
    height: auto;
    width: 500px;
    max-width: 100%;
  }
`

const ProductImage = ({ id }) => {
  const { image, isLoading } = useProductImage(id)
  return (
    <Wrapper>
      {isLoading ? <DummyImage /> : <img src={image.uri} alt="" />}
    </Wrapper>
  )
}

export default ProductImage
