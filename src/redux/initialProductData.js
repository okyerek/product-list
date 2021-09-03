import axios from "axios"
const URL = 'http://www.mocky.io/v2/5c3e15e63500006e003e9795'

const productDataFromLocalStorage = JSON.parse(localStorage.getItem('products'))

export const initialProductsData =  async () => {
    if (!(productDataFromLocalStorage?.length > 0 )|| !productDataFromLocalStorage) {
        try {
            const response = await axios.get(URL)
            const data = await response.data
            return data
        }catch (error) {
            // console.error(error);
          }
        } else {
        return { products: productDataFromLocalStorage}
    }
}