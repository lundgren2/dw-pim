import React from 'react'
import GlobalStyles from './components/global-styles'
import Nav from './components/nav'
import ProductListView from './components/product-list-view'
import ProductData from './components/product-data'
import { ProductProvider } from './context'

const App = () => (
  <ProductProvider>
    <GlobalStyles />
    <Nav />
    <ProductListView />
    <ProductData />
  </ProductProvider>
)

export default App
