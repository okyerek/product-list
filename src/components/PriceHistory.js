import PriceHistoryItem from "./PriceHistoryItem"

const PriceHistory = ({ historicPrices, viewHistoryId}) => {
    return (
        <>
            <div className="px-5 py-1">
                <h1 className="text-xs font-light">Historic Prices</h1>
                <div className="">
                    {
                        historicPrices.map(price => {
                            return (
                                <PriceHistoryItem key={price.id} price={price} />
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default PriceHistory
