import React from "react";

export default function ActivityCard({ name, duration, dificulty}){
    return (
        <div>
            <h3>{name}</h3>
            <h5>Duration: {duration} minutes</h5>
            <h5>Dificulty range {dificulty} of 5</h5>
        </div>
    )
}