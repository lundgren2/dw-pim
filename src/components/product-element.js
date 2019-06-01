import React from 'react'
import styled from '@xstyled/styled-components'

const ElementRow = styled.div`
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  border-bottom: 1px solid rgb(221, 221, 221);
  padding: 0.5rem 0px;
`

const ElementName = styled.span`
  color: lightGray;
`

const ElementValue = styled.span`
  color: text;
  max-width: 32rem;
`

const Text = ({ name, value }) => {
  if (!value) return null
  return (
    <ElementRow>
      <ElementName>{name.replace(/^\w/, c => c.toUpperCase())}</ElementName>
      <ElementValue>{value}</ElementValue>
    </ElementRow>
  )
}

const ProductElement = ({ element }) => {
  if (element.name === 'name') return null
  switch (element.type) {
    case 'input':
    case 'textarea':
    case 'numeric':
      return <Text name={element.name} value={element.value} />
    case 'quantityValue':
      const { value: price, unitAbbreviation: currency } = element.value
      return <Text name={element.name} value={`$${price} ${currency}`} />
    case 'href':
      // handled in product-image component
      return null
    default:
      return <div>Unkown type: {element.type}</div>
  }
}

export default ProductElement
