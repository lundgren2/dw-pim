import React from 'react'
import useSwaggerApi from '../hooks/useSwaggerApi'
import ProductListItem, { ProductListItemLoading } from './product-list-item'
import styled, { css, Box } from '@xstyled/styled-components'

const Wrapper = styled(Box)`
  background-color: #ffffff;
  padding: 2;
`

const Table = styled('table')`
  color: grey;
`
const Title = styled('h1')`
  font-size: 4;
  text-transform: uppercase;
  letter-spacing: 1px;
`

const Th = styled('td')`
  border: 0;
  text-align: left;
  padding: 2;
  font-weight: bold;
  font-size: 80%;
  text-transform: uppercase;
`

const ProductListView = () => {
  const [{ data, isLoading, isError }] = useSwaggerApi()

  if (isError) return <div>Something went wrong ...</div>

  return (
    <Wrapper>
      <Title>Produkter</Title>
      <br />
      <Table
        style={{
          width: '100%'
        }}
      >
        <thead>
          <tr>
            <Th>Id</Th>
            <Th>Name</Th>
            <Th>Price</Th>
            <Th>Published</Th>
          </tr>
        </thead>
        <tbody>
          {isLoading || !data
            ? [0, 1, 2].map(i => <ProductListItemLoading />)
            : data.map(product => <ProductListItem product={product} />)}
        </tbody>
      </Table>
    </Wrapper>
  )
}

export default ProductListView
