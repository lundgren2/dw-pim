import React from 'react'
import useFetchProducts from '../hooks/useFetchProducts'
import ProductListItem, { ProductListItemLoading } from './product-list-item'
import styled, { Box } from '@xstyled/styled-components'

const Wrapper = styled(Box)`
  background-color: #f9f9fa;
  border-right: 1;
  border-bottom: 1;
  border-color: #ccd1d8;
  padding: 4;
`

const Table = styled('table')`
  color: gray;
`
const Title = styled('h1')`
  font-size: 4;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: primary;
`

const Th = styled('td')`
  border: 0;
  text-align: left;
  padding: 2;
  font-weight: bold;
  font-size: 80%;
  text-transform: uppercase;
`
const PAGE_TITLE = 'Products'

const ProductListView = () => {
  const [{ data, isLoading, isError }] = useFetchProducts()
  const { products } = data

  if (isError) return <div>Some error when fetching data.</div>

  return (
    <Wrapper>
      <Title>{PAGE_TITLE}</Title>
      <br />
      <Table
        style={{
          width: '100%',
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
            ? [0, 1, 2].map(i => <ProductListItemLoading key={i} />)
            : products.map(product => (
                <ProductListItem key={product.id} product={product} />
              ))}
        </tbody>
      </Table>
    </Wrapper>
  )
}

export default ProductListView
