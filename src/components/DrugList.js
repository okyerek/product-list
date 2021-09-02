import axios from "axios"
import { useEffect, useState } from "react"
import DrugItem from "./DrugItem"

const URL = 'http://www.mocky.io/v2/5c3e15e63500006e003e9795'



const DrugList = () => {

    const [products, setProducts] = useState(null)

    useEffect(() => {
        const getData = async () =>{
            try {
                const response = await axios.get(URL)
                const data = await response.data
                setProducts(data.products);
                
            }catch (error) {
                console.error(error);
              }
        }
    
        getData()
    }, [])


    return (
        <div className="flex flex-col items-center justify-center">
            {
                products?.map((product) => {
                    return <DrugItem key={product.id} product={product} />
                })
            }
        </div>
    )
}

export default DrugList
