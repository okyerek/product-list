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
        },
        deleteProduct: (state, action) => {
            return state.filter((product) => product.id !== action.payload.id)
        },
        editProduct: (state, action) => {
            const { id, name, price } = action.payload
            const index = state.findIndex(( p ) => p.id === id)
            if (name){
                state[index].name = name
            }
            if (price){
                const { prices } = state[index]
                const newPrice = {
                    id: uuidv4(),
                    date: new Date().toISOString(),
                    price: price
                }
                prices.push(newPrice)


            }

        }
    },
    extraReducers: {
        [getAsyncData.fulfilled]: (state, action) => {
            return action.payload.products
        }
    }
})

export const {
    addNewProduct,
    deleteProduct,
    editProduct
} = productSlice.actions

export default productSlice.reducer