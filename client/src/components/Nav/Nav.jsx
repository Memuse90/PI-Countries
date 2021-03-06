import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { cleanError } from "../../redux/actions";
import Nv from './Nav.module.css'

export default function Nav ({handleSearch}){
    let [input, setInput]=React.useState({
        name: ''
    });

    let error = useSelector(state => state.error);

    console.log(error);
    // let [err, setErr] = React.useState('');
    const dispatch=useDispatch();

    function handleChange (e){
        setInput({name: e.target.value});
    };
    function handleClick (e) {
        handleSearch(input.name)
    }
    useEffect( () => {
        if (error !== ''){
            alert(error);
        }
        return dispatch(cleanError())
    }, [error])
    
    return (
       <> 
            <nav className={Nv.all}>
                
                    <div className={Nv.links}>
                        <div>
                        <NavLink className={Nv.NavLink} to={'/'}>Landing</NavLink>
                        </div>
                        <div>
                        <NavLink className={Nv.NavLink} to={'/create'}>Create Activity</NavLink>
                        </div>
                    </div>
                    <div className={Nv.search}>
                        <label>Country  </label>
                        <input className={Nv.inp} type={'search'} autoComplete={'country-name'} onChange={(e) => handleChange(e)} />
                        <input className={Nv.btn} type={'button'} onClick={(e) => handleClick(e) } value={'Search'}/>
                    </div>
                  

                
            </nav>
        </> 
    )
};