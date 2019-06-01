import React, { useContext } from 'react'
import styled, { Box, css } from '@xstyled/styled-components'
import { breakpoints } from '@xstyled/system'
import { ProductContext } from '../context'
import ProductImage from './product-image'
import ProductDetails from './product-details'
import CloseButton from './close-button'

const Wrapper = styled(Box)`
  padding: 4;
`
const ProductWrapper = styled(Box)(
  breakpoints({
    xs: css`
      display: flex;
      flex-direction: column-reverse;
    `,
    md: css`
      flex-direction: column;
    `,
  }),
)

const ProductData = () => {
  const [{ data }, dispatch] = useContext(ProductContext)
  const { selectedProduct } = data

  if (Object.entries(selectedProduct).length === 0) return null

  const imageObj = selectedProduct.elements.find(
    element => element.name === 'main_image' && element.type === 'href',
  )

  return (
    <Wrapper>
      <CloseButton onClick={() => dispatch({ type: 'RESET_PRODUCT' })} />
      <ProductWrapper>
        <ProductImage id={imageObj.value.id} />
        <ProductDetails product={selectedProduct} />
      </ProductWrapper>
    </Wrapper>
  )
}

export default ProductData
