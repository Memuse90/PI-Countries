import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCountryById } from "../../redux/actions";
import ActivityCard from "../Cards/ActivityCard";
import D from './Detail.module.css'

export default function Detail (props){
    const id = props.match.params.id;
    
    const dispatch = useDispatch();

    React.useEffect( () => dispatch(getCountryById(id)), [dispatch]);

    const country = useSelector(state => state.country);


    return (
        <div className={D.all}>
            <nav className={D.nav}>
                    <Link className={D.link} to='/home'>Return</Link>
                </nav>
            <div className={D.pri}>
            <h1>{country.name}</h1>
            <div>
                <img src={country.flag} alt= 'Not found'/>
            </div>
            <div>
                <h4>Continent: {country.continent}</h4>
                <h4>Capital: {country.capital}</h4>
                <h5>Subregion: {country.subregion}</h5>
                <h5>Area: {country.area} m2</h5>
                <h5>Population: {country.population}</h5>
            </div>
            </div>
            <div className={D.sep}>
                <h5 className={D.link}>Activities</h5>
            </div>    
            <div className={D.act}>
                <ul>
                {country.activities?.map((a) =>{
                    return <ActivityCard
                                key={a.id}
                                name={a.name}
                                duration={a.duration}
                                dificulty={a.dificulty}
                                season={a.season}/>
                })}
                </ul>
            </div>
        </div>
    )
};