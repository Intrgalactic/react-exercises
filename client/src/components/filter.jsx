
export const Filter = ({handleFilterAndWrite}) => {
    return (
        <>
            <select onChange={handleFilterAndWrite}>
                <option value="" selected disabled hidden>Filter by Region</option>
                <option value="Africa">Africa</option>
                <option value="Americas">Americas</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
            </select>
        </>
    )
}