import React from "react";
import Po from './Population.module.css'
export default function Population ({handlePopSort}){

    return(
        <div>
            <select className={Po.selec} onChange={(e)=> handlePopSort(e.target.value)}>
                <option className={Po.op} value={'none'}>Sort by population</option>
                <option className={Po.op} value={'asc'}>Ascendent</option>
                <option className={Po.op} value={'desc'}>Descendent</option>
            </select>    
        </div>
    )
};