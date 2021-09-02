import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4} from 'uuid' 
import { initialProductsData } from './initialProductData'


export const getAsyncData = createAsyncThunk(
    'products/getAsyncData',
    async () => {
        const productsData = await initialProductsData()
            return productsData
    }
)

const productSlice = createSlice({
    name: 'products',
    initialState:[],
    reducers: {
        addNewProduct: (state, action) => {
            const newProduct = {
                id: uuidv4(),
                name: action.payload.name,
                prices: [{
                    id: uuidv4(),
                    date: new Date().toISOString(),
                    price: action.payload.price
                }]
            }
            state.push(newProduct)
        }
    },
    extraReducers: {
        [getAsyncData.fulfilled]: (state, action) => {
            return action.payload.products
        }
    }
})

export const {
    addNewProduct
} = productSlice.actions

export default productSlice.reducer