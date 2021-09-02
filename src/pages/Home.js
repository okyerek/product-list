import { useState } from "react"
import { IoMdClose } from "react-icons/io"
import DrugList from "../components/DrugList"

const Home = () => {

    const [openNewForm, setOpenNewForm] = useState(false)
    const [product, setProduct] = useState({name: "", price: ""})


    return (
        <div className='flex flex-col'>
            <div className="flex justify-center">
                <div className="w-4/5 py-2  flex justify-self-center justify-between">
                    <div className="">Drug List</div>
                    {/* Add new product button */}
                    <button
                        onClick={() => setOpenNewForm(true)}
                        className="flex text-xl font-bold justify-center w-8 h-8 bg-green-200 "
                    >
                        +
                    </button>
                </div>
            </div>

            {/*List of Drugs */}
            <DrugList />
                {
                    openNewForm &&
                    <div className="absolute z-10 bg-gray-100 w-screen h-screen flex items-center justify-center">
                        {/* create new product form */}
                        <div className="w-96 bg-white mx-10 px-10 pb-10">
                            <div className="flex items-center justify-between">
                                <h1 className="text-lg font-semibold">Add a new product</h1>
                                <button 
                                    onClick={() => setOpenNewForm(false)}
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
                                    className="bg-green-200 w-1/4 flex justify-center self-center py-1 font-semibold"
                                >submit</button>
                            </form>

                        </div>
        
                    </div>
                }
        </div>
    )
}

export default Home
