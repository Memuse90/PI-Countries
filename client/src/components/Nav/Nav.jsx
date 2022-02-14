import React from "react";
import { NavLink } from "react-router-dom";


export default function Nav ({handleSearch}){
    let [input, setInput]=React.useState({
        name: ''
    });
    function handleChange (e){
        e.preventDefault();
        setInput({name: e.target.value});
        console.log(input)
    };
    function handleClick (e) {
        handleSearch(input.name)
    }
    
    return (
       <> 
            <nav>
                
                    <div>
                        <NavLink to={'/home'}>Home</NavLink>
                    </div>
                    <div>
                        <label>Search Country</label>
                        <input type={'search'} autoComplete={'country-name'} onChange={(e) => handleChange(e)} />
                        <input type={'button'} onClick={(e) => handleClick(e) } value={'Search'}/>
                    </div>
                    <div>
                        <NavLink to={'/create'}>Create Activity</NavLink>
                    </div>

                
            </nav>
        </> 
    )
};