import React, { createContext, useReducer } from 'react'

export const FETCH_INIT = 'FETCH_INIT'
export const FETCH_SUCCESS = 'FETCH_SUCCESS'
export const FETCH_FAILURE = 'FETCH_FAILURE'
export const SELECT_PRODUCT = 'SELECT_PRODUCT'
export const RESET_PRODUCT = 'RESET_PRODUCT'

const dataFetchReducer = (state, action) => {
  switch (action.type) {
    case FETCH_INIT:
      return { ...state, isLoading: true, isError: false }
    case FETCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload,
      }
    case FETCH_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      }
    case SELECT_PRODUCT:
      return {
        ...state,
        data: { ...state.data, selectedProduct: action.payload },
      }
    case RESET_PRODUCT:
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
