import { Header } from "components/header";
import { Main } from "components/main";
import { Countries } from "components/countries";
import { Search } from "components/search";
import { Filter } from "components/filter";
import React from "react";
const Home = ({ handleFilterAndWrite, countries, handleRedirect}) => {
    return (
        <>
            <Header/>
            <Main>
                <div className="tools-container">
                    <Search handleFilterAndWrite={handleFilterAndWrite}></Search>
                    <Filter handleFilterAndWrite={handleFilterAndWrite}></Filter>
                </div>
                <Countries countries={countries} handleRedirect={handleRedirect} />
            </Main>
        </>
    )
}

export default Home;