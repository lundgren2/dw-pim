import React, { createContext, useReducer } from 'react'

const dataFetchReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_INIT':
      return { ...state, isLoading: true, isError: false }
    case 'FETCH_SUCCESS':
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload,
      }
    case 'FETCH_FAILURE':
      return {
        ...state,
        isLoading: false,
        isError: true,
      }
    case 'SELECT_PRODUCT':
      return {
        ...state,
        data: { ...state.data, selectedProduct: action.payload },
      }
    case 'RESET_PRODUCT':
      return {
        ...state,
        data: { ...state.data, selectedProduct: {} },
      }
    default:
      throw new Error()
  }
}

const initialState = {
  isLoading: false,
  isError: false,
  data: {
    products: [],
    selectedProduct: {},
  },
}

const ProductContext = createContext()

const ProductProvider = props => {
  return (
    <ProductContext.Provider value={useReducer(dataFetchReducer, initialState)}>
      {props.children}
    </ProductContext.Provider>
  )
}
export { ProductContext, ProductProvider }
