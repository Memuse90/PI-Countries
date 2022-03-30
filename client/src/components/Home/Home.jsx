import React, {useState}from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCountries, filterByActivity, filterByContinent, getCountriesByName, sortAlphabetically, sortByPopulation, resetDetail } from "../../redux/actions";
import {CountryCard} from '../Cards/CountryCard';
import ByActivity from "../Filters/ByActivity";
import ByContinent from "../Filters/ByContinent";
import Nav from '../Nav/Nav';
import Pagefile from "../Pagefile/Pagefile";
import Alphabetical from '../Sorts/Alphabetical';
import Population from "../Sorts/Population";
import Hm from './Home.module.css';

export default function Home () {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllCountries());
        dispatch(resetDetail());
    }, [dispatch]);

    const allCountries = useSelector(state => state.countries);

    const [currentPage, setCurrentPage] = useState(1);

    const [countriesPerPage, setCountriesPerPage] = useState(9);

    const indexOfLastCountry = currentPage*countriesPerPage;

    const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;

    const currentCountries = allCountries.slice(indexOfFirstCountry,indexOfLastCountry);

    const paginado = (pageNumber => setCurrentPage(pageNumber));

    const pageController = (pageNumber => {
        if (pageNumber === 1) {
           return setCountriesPerPage(10);
        } else {
            return setCountriesPerPage (10);
        }
    });
    const handleFilterByActivity = (e) => {
        dispatch(filterByActivity(e))
    };
    const handleFilterByContinent = (e) => {
        dispatch (filterByContinent(e))
    };
    const handleSearch = (name) => {
        if (name !== ''){
        dispatch (getCountriesByName(name))
        } else {
            dispatch (getAllCountries());
        }
    };
    const handleAlphaSort = (e) => {
        dispatch(sortAlphabetically(e))
    };
    const handlePopSort = (e) => {
        dispatch (sortByPopulation(e));
    };

    return (
        <>
        <div className={Hm.all}>
             <div className={Hm.nav}>
                <Nav handleSearch={handleSearch}/>
            </div>
            <div className={Hm.sortsandfilters}>
            <div className={Hm.sorts}>
                    <div className={Hm.sSorts}> 
                        <Alphabetical handleAlphaSort={handleAlphaSort}/>
                    </div>
                    <div className={Hm.sSorts}>
                        <Population handlePopSort={handlePopSort}/>
                    </div>
                    <div className={Hm.filters}>
                        <div className={Hm.sfilter}>
                            <ByActivity 
                            handleFilterByActivity={handleFilterByActivity}/> 
                        </div>
                        <div className={Hm.sfilter}>
                            <ByContinent handleFilterByContinent={handleFilterByContinent}/>
                        </div>

                        </div>
            </div>  
            </div>
            {/* <div className={Hm.space}>

            </div> */}
            <div className={Hm.pagefile}>
                <Pagefile
                        countriesPerPage={countriesPerPage}
                        allCountries={allCountries.length}
                        paginado={paginado}
                        pageController = {pageController} 
                        currentPage={currentPage}
                    />
                </div>
            <div className={Hm.body}>
            
                <div>
                <div className={Hm.cards}>
                        {currentCountries?.map( (c) => {
                        return <CountryCard
                                key={c.id}    
                                id={c.id}
                                name={c.name}
                                continent={c.continent}
                                imageURL={c.flag}
                            />
                        })}
                </div>
                <div className={Hm.pagefile}>
                <Pagefile
                        countriesPerPage={countriesPerPage}
                        allCountries={allCountries.length}
                        paginado={paginado}
                        pageController = {pageController}
                        currentPage={currentPage} 
                    />
                </div>       

                </div>
            </div>
         </div>
        </>
    )
};