import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    productList: []
}

export const productSlice = createSlice({
    name: "product",
    initialState,
    reducers : {
        setDataProduct : ( state, action ) => {
            console.log(action)
            state.productList = [...action.payload]
        }
    }
})

export const { setDataProduct } = productSlice.actions

export default productSlice.reducer