import React from "react";

export default function Population ({handlePopSort}){

    return(
        <div>
            <select onChange={(e)=> handlePopSort(e.target.value)}>
                <option value={'none'}>None</option>
                <option value={'asc'}>Ascendent</option>
                <option value={'desc'}>Descendent</option>
            </select>    
        </div>
    )
};