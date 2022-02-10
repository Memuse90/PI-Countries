import React from "react";
import { useSelector } from "react-redux";



export default function ByActivity () {
    
    const activities = useSelector(state => state.activities);
    return (
        <div>
            <select>
                {activities?.map(a => {
                    return (
                        <option value={a.name}>{a.name}</option>
                    )
                })}
            </select>
        </div>

    )
};