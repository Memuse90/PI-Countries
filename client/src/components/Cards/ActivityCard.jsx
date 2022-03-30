import React from "react";
import Ac from './ActivityCard.module.css'
export default function ActivityCard({ name, duration, dificulty, season}){
    return (
        <div className={Ac.card}>
            <h3 className={Ac.title}>{name}</h3>
            <p>Season: {season}</p>
            <p>Duration: {duration} minutes</p>
            <p>Dificulty range: {dificulty} of 5</p>
        </div>
    )
}