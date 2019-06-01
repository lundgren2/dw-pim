import React, { useState, useEffect } from 'react'
import styled from '@xstyled/styled-components'
import DummyItem, { DummyImage } from './dummy-item'
import useProductImage from '../hooks/useProductImage'
const Wrapper = styled('div')``

const ProductImage = ({ id }) => {
  const { image, isLoading } = useProductImage(id)
  console.log(isLoading)
  return (
    <Wrapper>
      {isLoading ? <DummyImage /> : <img src={image.uri} width="500" alt="" />}
    </Wrapper>
  )
}

export default ProductImage
