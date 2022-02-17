import React from 'react';
import { NavLink } from 'react-router-dom';
import Lp from './LandingPage.module.css';

export default function LandingPage () {

    return (
        <div className={Lp.principal}>
            <div>
                <h1 className={Lp.title}>Countries API</h1>
            </div>
            <div>
            <NavLink to={'/home'}>
                <button className={Lp.button}>Let's travel!</button>
            </NavLink>
            </div>
        </div>
    )
};