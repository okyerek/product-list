const PriceHistoryItem = ({ price: { date , price}}) => {
    const historicDate = new Date(date)
    return (
        <div className="text-xs font-semibold pb-1 my-1 border-gray-100 border-b-2 flex justify-between">
            <p>{historicDate.toLocaleString("en-US")}</p>
            <p>{`GHC ${price}`}</p>
        </div>
    )
}

export default PriceHistoryItem
