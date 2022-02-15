import React from "react";
import Pf from "./Pagefile.module.css";

export default function Pagefile ({countriesPerPage, allCountries, paginado, pageController}){

    const pageNumbers = []; 

    for (let i=1; i <= Math.ceil(allCountries/countriesPerPage); i++){
        pageNumbers.push(i);
    }

    return(
        <div>
            <nav>
                <ul  className={Pf.numbers}  >
                    {pageNumbers?.map(
                        number => {return(
                            <li key={number} className= {Pf.number}>
                                <a className="cosito" href="#" onClick={() => {
                                    return paginado(number), pageController(number)}}>{number}</a>
                            </li>
                        )}
                    )}
                </ul>
            </nav>
        </div>
    )
};