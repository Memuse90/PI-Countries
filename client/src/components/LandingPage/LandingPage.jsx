import React from 'react';
import { NavLink } from 'react-router-dom';

export default function LandingPage () {

    return (
        <div>
            <h1>Countries API</h1>
            <NavLink to={'/home'}>
                <button>Inicio</button>
            </NavLink>
        </div>
    )
};