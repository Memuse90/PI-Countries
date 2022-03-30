import React from 'react';
import BC from './ByContinent.module.css'
export default function ByContinent ({handleFilterByContinent}){
    
    return (
        <div className={BC.all}>
            <select className={BC.selec} onChange={(e) => handleFilterByContinent(e.target.value)}>
                <option className={BC.op} value={'All'} selected={'true'}>Filter by continent</option>
                <option className={BC.op} value={'Americas'}>Americas</option>
                <option className={BC.op} value={'Asia'}>Asia</option>
                <option className={BC.op} value={'Africa'}>Africa</option>
                <option className={BC.op} value={'Oceania'}>Oceania</option>
                <option className={BC.op} value={'Europe'}>Europe</option>
                <option className={BC.op} value={'Antartic'}>Antartic</option>
            </select>
        </div>
    )
};