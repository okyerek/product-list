import { useState } from "react"
import AddProductForm from "../components/AddProductForm"
import DrugList from "../components/DrugList"

const Home = () => {

    const [openNewForm, setOpenNewForm] = useState(false)

    const handleCloseFormButton = (e) => {
        e.preventDefault()
        setOpenNewForm(false)
    } 


    return (
        <div className='flex flex-col'>
            <div className="flex justify-center">
                <div className="w-4/5 py-2  flex justify-self-center justify-between">
                    <div className="">Drug List</div>
                    {/* Add new product button */}
                    <button
                        onClick={() => setOpenNewForm(true)}
                        className="flex text-xl font-bold justify-center w-8 h-8 bg-green-200"
                    >
                        +
                    </button>
                </div>
            </div>

            {/*List of Drugs */}
            <DrugList />
                {
                    openNewForm && 
                    <AddProductForm handleCloseFormButton={handleCloseFormButton} />
                }
        </div>
    )
}

export default Home
