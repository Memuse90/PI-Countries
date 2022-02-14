import React from "react";


export default function Alphabetical ({handleAlphaSort}) {


    return(
        <div>
            <select defaultValue={'none'} onChange={(e) => handleAlphaSort(e.target.value)} >
                <option value={'none'}>None</option>
                <option value={'asc'}>Ascendent</option>
                <option value={'desc'}>Descendent</option>
            </select>
        </div>    
    )
}