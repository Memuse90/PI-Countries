import React from 'react';
import { NavLink } from 'react-router-dom';
import Lp from './LandingPage.module.css';

export default function LandingPage () {

    return (
        <div className={Lp.principal}>
            <h1>Countries API</h1>
            <NavLink to={'/home'}>
                <button>Let's travel!</button>
            </NavLink>
        </div>
    )
};