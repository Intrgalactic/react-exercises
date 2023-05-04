
export const ComplexCountryDescription = ({detailNames,detailValues}) => {
    return (
        <div className="complex-country-description">
            {detailNames.map((n, index) => (
                typeof (detailValues[index]) !== "number" ? <div key={index}>{n} : {detailValues[index]} </div> : <div key={index}> {n} : {detailValues[index].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} </div>
            ))}
        </div>
    )
}