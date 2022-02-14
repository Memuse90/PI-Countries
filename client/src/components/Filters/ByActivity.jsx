import React from "react";
import { useSelector } from "react-redux";



export default function ByActivity ({handleFilterByActivity}) {
    
    const activities = useSelector(state => state.activities);
    return (
        <div>
            <select onChange={(e) => handleFilterByActivity(e.target.value)}>
                <option value={'All'} key={'0'}>All</option>
                {activities?.map(a => {
                    return (
                        <option value={a.name} key={a.id}>{a.name}</option>
                    )
                })}
            </select>
        </div>

    )
};