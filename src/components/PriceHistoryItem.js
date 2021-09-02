const PriceHistoryItem = ({ price: { date , price}}) => {

    const options = {year: 'numeric', month: 'long', day: 'numeric'}
    const historicDate = new Date(date)
    return (
        <div className="text-sm flex justify-between">
            <p >{historicDate.toLocaleString("en-US")}</p>
            <p>{price}</p>
            
        </div>
    )
}

export default PriceHistoryItem
