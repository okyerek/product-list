import { useState } from "react"
import { IoMdClose } from "react-icons/io"
import { useDispatch } from "react-redux"
import { nameValidator, priceValidator } from "../helpers/formValidator"
import { addNewProduct } from "../redux/productsSlice"

const AddProductForm = ( { handleCloseFormButton }) => {

    const [product, setProduct] = useState(
        {
            name:"", productNameError: "",
            price: "", productPriceError: ""
        }
    )

    const dispatch = useDispatch()


    const handleOnSubmit = (e) => {
        e.preventDefault()

        const nameError = nameValidator(product.name, "Product Name")
        const priceError = priceValidator(product.price, "Product Price")

        if (nameError || priceError ) {
            alert(`Opps! ${nameError || priceError}`)
            // setProduct({
            //     ...product,
            //     productNameError: nameError,
            //     productPriceError: priceError
            // })

            return
        }

        // if(!product.name || !product.price){
        //     return
        // }
        dispatch(addNewProduct({
            name: product.name,
            price: product.price
        }))
        handleCloseFormButton(e);
    }


    return (
        <div>
            <div className="absolute inset-0 z-10 bg-gray-100 w-screen h-screen flex items-center justify-center">
                        {/* create new product form */}
                        <div className="w-96 bg-white mx-10 px-10 pb-10">
                            <div className="flex items-center justify-between">
                                <h1 className="text-lg font-semibold">Add a new product</h1>
                                <button 
                                    onClick={handleCloseFormButton}
                                className="py-5 pb-10">
                                    <IoMdClose className="text-2xl"/>
                                </button>
                            </div>
                            
                            <form className="flex flex-col gap-5">
                                <div className="flex gap-3 justify-center">
                                    <div className="w-full flex flex-col gap-3">
                                        <input
                                            className="bg-gray-200 text-xs font-light px-2 py-1.5 text-sm outline-none"
                                            type="text" placeholder="Enter product name"
                                            value={product.name}
                                            onChange={e=>setProduct({ ...product, name:e.target.value})}
                                        />
                                        <input
                                            className="bg-gray-200 text-xs font-light px-2 py-1.5 text-sm outline-none"
                                            type="text" placeholder="Enter price"
                                            value={product.price}
                                            onChange={e=> setProduct({...product, price: e.target.value})}
                                        />
                                    </div>
                                </div>
                                <button
                                    onClick={handleOnSubmit}
                                    className="bg-green-200 w-1/4 flex justify-center self-center py-1 font-semibold"
                                >submit</button>
                            </form>

                        </div>
        
                    </div>
        </div>
    )
}

export default AddProductForm
