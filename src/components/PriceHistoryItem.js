const PriceHistoryItem = ({ price: { date , price}}) => {
    const historicDate = new Date(date)
    return (
        <div className="text-sm flex justify-between">
            <p>{historicDate.toLocaleString("en-US")}</p>
            <p>{price}</p>
            
        </div>
    )
}

export default PriceHistoryItem
