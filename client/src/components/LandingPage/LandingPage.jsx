import React from 'react';
import { NavLink } from 'react-router-dom';
import Lp from './LandingPage.module.css';

export default function LandingPage () {

    return (
        <div className={Lp.principal}>
            <div className={Lp.title}>
                <div className={Lp.countries}>
                    <h1  className={Lp.countries} >Countries API</h1>
                </div>
            </div>
            <div>
            <NavLink to={'/home'}>
                <button className={Lp.button}>Let's travel!</button>
            </NavLink>
            </div>
            <div>
                
            </div>
        </div>
    )
};