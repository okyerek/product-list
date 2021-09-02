import { ImHistory } from 'react-icons/im'
import { FiEdit2 } from 'react-icons/fi'
import { RiDeleteBin2Line } from 'react-icons/ri'
import { IoMdClose } from 'react-icons/io'
import PriceHistory from './PriceHistory'
import { useEffect, useState } from 'react'
const DrugItem = ({ product: { id, name, prices }}) => {

    const [viewHistoryId, setViewHistoryId] = useState(null)
    const [isOpened, setIsOpened] = useState(false)

    


    const latestPrice = prices.sort((a, b) => new Date(b.date) - new Date(a.date))[0]
    const historicPrices = prices.filter(p => p.id !== latestPrice.id)

    const onViewHistoryClicked = (e) => {
        e.preventDefault()
        setViewHistoryId(id)
        setIsOpened(!isOpened)
    }

    return (
        <div className="w-4/5 p-3">
            <div className="w-full flex items-center">
                {/* history icon */}
                <button
                    onClick={onViewHistoryClicked}
                >
                   {
                       isOpened? <IoMdClose/>: <ImHistory />
                   } 
                </button>
                {/* drug name and price*/}
                <div className="flex flex-1 justify-between items-center px-2">
                    <p className="flex flex-1 px-1 text-lg font-semibold">{name}</p>
                    <p>{latestPrice.price}</p>
                </div>
                {/* edit and delete icons */}
                <div className="">
                    <button>
                        <FiEdit2 /> 
                    </button>
                    <button>
                        <RiDeleteBin2Line /> 
                    </button>
                </div>
            </div>
            {/* Historic prices */}
            <div className="px-4">
                {
                    isOpened && 
                    <PriceHistory  
                        historicPrices={historicPrices} viewHistoryId={viewHistoryId}
                    />
                }
            </div>
        </div>
    )
}

export default DrugItem
