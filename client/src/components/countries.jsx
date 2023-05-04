
import { Link } from "react-router-dom"
export const Countries = ({countries,handleRedirect}) => {

    return (
        <section className="countries-wrapper">
            <div className="countries-row">
                {countries.map((country, index) => (
                    <div className="country-record" key={index}>
                        <div className="country-image"><Link to="country" onClick={() => {handleRedirect(country)}} ><img src={country.image} alt={country.name}></img></Link></div>
                        <div className="country-description">
                            <h2>{country.name}</h2>
                            <p>Population: {country.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
                            <p>Region: {country.region}</p>
                            <p>Capital: {country.capital}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}