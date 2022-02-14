import React from 'react';

export default function ByContinent ({handleFilterByContinent}){
    
    return (
        <div>
            <select onChange={(e) => handleFilterByContinent(e.target.value)}>
                <option value={'All'}>All</option>
                <option value={'Americas'}>Americas</option>
                <option value={'Asia'}>Asia</option>
                <option value={'Africa'}>Africa</option>
                <option value={'Oceania'}>Oceania</option>
                <option value={'Europe'}>Europe</option>
                <option value={'Antartic'}>Antartic</option>
            </select>
        </div>
    )
};