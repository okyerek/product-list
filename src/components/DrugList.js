import { useEffect  } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAsyncData } from "../redux/productsSlice"
import DrugItem from "./DrugItem"

const DrugList = ( ) => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAsyncData())
    }, [dispatch])

    const reduxProducts = useSelector(({products}) => products)


    return (
        <div className="flex flex-col items-center justify-center">
            {
                reduxProducts?.map((product) => {
                    return <DrugItem key={product.id} product={product} />
                })
            }
        </div>
    )
}

export default DrugList
