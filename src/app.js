import React from 'react'
import { ProductProvider } from './context'
import GlobalStyles from './components/global-styles'
import Nav from './components/nav'
import ProductListView from './components/product-list-view'
import ProductData from './components/product-data'

const App = () => (
  <ProductProvider>
    <GlobalStyles />
    <Nav />
    <ProductListView />
    <ProductData />
  </ProductProvider>
)

export default App
