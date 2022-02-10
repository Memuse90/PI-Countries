import React, {useState}from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCountries } from "../../redux/actions";
import {CountryCard} from '../Cards/CountryCard';
import ByActivity from "../Filters/ByActivity";
import Nav from '../Nav/Nav';
import Pagefile from "../Pagefile/Pagefile";
import Alphabetical from '../Sorts/Alphabetical';
import Population from "../Sorts/Population";

export default function Home () {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllCountries());
    }, [dispatch]);

    const allCountries = useSelector(state => state.countries);

    const [currentPage, setCurrentPage] = useState(1);

    const [countriesPerPage, setCountriesPerPage] = useState(10);

    const indexOfLastCountry = currentPage*countriesPerPage;

    const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;

    const currentCountries = allCountries.slice(indexOfFirstCountry,indexOfLastCountry);

    const paginado = (pageNumber => setCurrentPage(pageNumber));

    const pageController = (pageNumber => {
        if (pageNumber === 1) {
           return setCountriesPerPage(9);
        } else {
            return setCountriesPerPage (10);
        }
    })

    return (
        <>
             <div>
                <Nav/>
            </div>  
            <div className="sorts">
               <h5>Order alphabetically </h5> <Alphabetical/>
               <h5>Sort by population </h5> <Population/>
            </div>
            <div>
                <h6>Filter by tourist activity </h6><ByActivity/> 
            </div>
            <Pagefile
                    countriesPerPage={countriesPerPage}
                    allCountries={allCountries.length}
                    paginado={paginado}
                    pageController = {pageController} 
                />   
            <div className="cards">
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
            <br/>
            
               
            
        </>
    )
};