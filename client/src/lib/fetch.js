
export async function fetchCountries(setCountries) {
    await fetch("https://restcountries.com/v3.1/all").then(res => res.json()).then((data) => {
        let countriesArr = [];
        let obj;
        data.forEach(country => {
            obj = {
                native_name: country.name.official,
                population: country.population,
                region: country.region,
                sub_region: country.subregion,
                capital: country.capital,
                domain: country.tld,
                currencies: country.currencies,
                languages: country.languages,
                name: country.name.common,
                border: country.borders,
                image: country.flags.png,
                image_svg:country.flags.svg
            }
            countriesArr.push(obj);
        })
        setCountries(countriesArr.sort((first_country,second_country) => first_country.name.localeCompare(second_country.name)));
      
    }).catch((err) => {
        console.log(err);
    });

}


