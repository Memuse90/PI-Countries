import React from "react";
import { useSelector } from "react-redux";
import BA from './ByActivity.module.css'


export default function ByActivity ({handleFilterByActivity}) {
    
    const activities = useSelector(state => state.activities);
    return (
        <div>
            <select className={BA.selec} onChange={(e) => handleFilterByActivity(e.target.value)}>
                <option className={BA.op} hidden={'true'} value={'All'} key={'0'} selected={'true'}>Filter by tourist activity</option>
                {activities?.map(a => {
                    return (
                        <option className={BA.op} value={a.name} key={a.id}>{a.name}</option>
                    )
                })}
            </select>
        </div>

    )
};