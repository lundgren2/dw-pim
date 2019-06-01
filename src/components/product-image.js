import React from 'react'
import { DummyImage } from './dummy-item'
import useProductImage from '../hooks/useProductImage'

const ProductImage = ({ id }) => {
  const { image, isLoading } = useProductImage(id)
  return (
    <div>
      {isLoading ? <DummyImage /> : <img src={image.uri} width="500" alt="" />}
    </div>
  )
}

export default ProductImage
