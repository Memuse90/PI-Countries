import React from "react";
import { NavLink } from "react-router-dom";
import Nv from './Nav.module.css'

export default function Nav ({handleSearch}){
    let [input, setInput]=React.useState({
        name: ''
    });
    function handleChange (e){
        setInput({name: e.target.value});
        console.log(input)
    };
    function handleClick (e) {
        handleSearch(input.name)
    }
    
    return (
       <> 
            <nav className={Nv.all}>
                
                    <div className={Nv.links}>
                        <NavLink className={Nv.NavLink} to={'/'}>Landing</NavLink>
                        <NavLink className={Nv.NavLink} to={'/create'}>Create Activity</NavLink>
                    </div>
                    <div className={Nv.search}>
                        <label>Search Country</label>
                        <input type={'search'} autoComplete={'country-name'} onChange={(e) => handleChange(e)} />
                        <input type={'button'} onClick={(e) => handleClick(e) } value={'Search'}/>
                    </div>
                   

                
            </nav>
        </> 
    )
};