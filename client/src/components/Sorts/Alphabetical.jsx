import React from "react";
import Al from './Alphabetical.module.css';

export default function Alphabetical ({handleAlphaSort}) {


    return(
        <div className={Al.selec}>
            <select className={Al.selec} defaultValue={'none'} onChange={(e) => handleAlphaSort(e.target.value)} >
                <option className={Al.op} value={'none'}>Order alphabetically</option>
                <option className={Al.op} value={'asc'}>Ascendent</option>
                <option className={Al.op} value={'desc'}>Descendent</option>
            </select>
        </div>    
    )
}