import React from "react";
import { NavLink } from "react-router-dom";

function handleClick(e) {
    
}

export default function Nav (){
    return (
       <> 
            <nav>
                
                    <div>
                        <NavLink to={'/home'}>Home</NavLink>
                    </div>
                    <div>
                        <label>Search Country</label>
                        <input type={'search'}/>
                        <input type={'button'} onClick={(e) => handleClick(e) } value={'Search'}/>
                    </div>
                    <div>
                        <NavLink to={'/create'}>Create Activity</NavLink>
                    </div>

                
            </nav>
        </> 
    )
};