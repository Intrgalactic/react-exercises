
import { Header } from "components/header"
import { Main } from "components/main";
import { Back } from "components/backButton";
import { ComplexCountryDescription } from "components/complexCountryDescription";
const Country = ({ country }) => {
    const detailNames = ["Native Name", "Population", "Region", "Sub Region", "Capital", "Top Level Domain", "Currencies", "Languages"];
    let detailValues = [];
    if (!window.localStorage.getItem("country-details")) {
        window.localStorage.setItem("country-details", JSON.stringify(country));
    }
    if (country.name !== undefined) {
        if (JSON.parse(window.localStorage.getItem("country-details")).name !== country.name) {
            window.localStorage.setItem("country-details", JSON.stringify(country));
        }
    }
    const country_details = JSON.parse(window.localStorage.getItem("country-details"));
    for (const [key, value] of Object.entries(country_details)) {
        if (key === "currencies" || key === "languages") {
            var arr = [];
            for (const [, secValue] of Object.entries(country_details[key])) {
                key === "currencies" ? arr.push(secValue.name) : arr.push(secValue);
            }
            detailValues.push(arr.join(', '));
        }
        else if (key !== "image" && key !== "border" && key !== "name") {
            detailValues.push(value);
        }
    }
    return (
        <>
            <Header/>
            <Main>
                <Back />
                <div className="single-country">
                    <div className="country-flag">
                        <img src={country_details.image_svg} alt={country_details.name}></img>
                    </div>
                    <div className="single-country-description">
                        <h1>{country_details.name}</h1>
                        <ComplexCountryDescription detailNames={detailNames} detailValues={detailValues}/>
                    </div>
                </div>
            </Main>
        </>
    )
}

export default Country;