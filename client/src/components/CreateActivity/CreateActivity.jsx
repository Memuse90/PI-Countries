import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { createActivity, getCountriesNames } from '../../redux/actions';
import Cr from './CreateActivity.module.css';

export default function CreateActivity () {

    const dispatch = useDispatch();

    const cNames = useSelector(state => state.countriesNames);

    const response = useSelector (state => state.newActivity);

    React.useEffect( () => dispatch (getCountriesNames()), [dispatch]);
    
    const [input, setInput] = React.useState({
        name:'',
        dificulty: 0,
        duration: 0,
        season: ''
    });
    
    const [error, setError] = React.useState("");

    const [country, setCountry] = useState('');
    
    const [countries, setCountries] = useState([]); 



    const handleSelect = (e) => {
        let ban= countries.includes(country);
        const allCountries = countries;
        if (country !== '' && ban === false){
            setCountries([...allCountries, country]);
        }
        console.log(e.target.value)
    };
    function completeCountry (e){
        setCountry (e.target.value);

    }

    function handleDelete (e){
        let newCountries= countries.filter(c => c !== e.target.id)
        setCountries(newCountries);
    }
   
    function validateName(e){
        if(!/^(\w+)$/.test(e.target.value)){
            setError("Name shouldn't have numbers or any other special character");
        } else {
            setError('');
        }
        setInput({...input, [e.target.name]: e.target.value})
    };

    function handleChange (e){
        setInput({...input, [e.target.name]: e.target.value})
    }
    
    function handleSubmit (e) {
        e.preventDefault();
        dispatch(createActivity({...input, countries: countries}));
    }
    
    return (

        <div>
            <h1>Create Activity</h1>
            <Link to='/home'>Home</Link>
            <form onSubmit={(e) => handleSubmit(e)}>
               <div> 
                    <label>Name: </label>
                    <input name='name' placeholder='Activity name' onClick={(e) => validateName(e)}/>
                    {!error? null:<span className={Cr.error}>{error}</span>}
                </div>
                <div> 
                    <label>Dificulty: </label>
                    <label>1</label>
                    <input key={'1'}type={'radio'} name='dificulty' onClick={(e) => handleChange(e)} value={'1'}/>
                    <label>2</label>
                    <input key={'2'} type={'radio'} name='dificulty' onClick={(e) => handleChange(e)} value= {'2'}/>
                    <label>3</label>
                    <input key={'3'} type={'radio'} name='dificulty' onClick={(e) => handleChange(e)} value= {'3'}/>
                    <label>4</label>
                    <input key={'4'} type={'radio'} name='dificulty' onClick={(e) => handleChange(e)} value= {'4'}/>
                    <label>5</label>
                    <input key={'5'} type={'radio'} name='dificulty' onClick={(e) => handleChange(e)} value= {'5'}/>
                </div>
                <div>
                    <label>Season:</label>
                    <div>
                    <label>Spring</label>
                    <input key={'Spring'}type={'radio'} name='season' onClick={(e) => handleChange(e)} value={'spring'}/>
                    <label>Summer</label>
                    <input key={'Summer'} type={'radio'} name='season' onClick={(e) => handleChange(e)} value= {'summer'}/>
                    <label>Autumm</label>
                    <input key={'Autumm'} type={'radio'} name='season' onClick={(e) => handleChange(e)} value= {'autumm'}/>
                    <label>Winter</label>
                    <input key={'Winter'} type={'radio'} name='season' onClick={(e) => handleChange(e)} value= {'winter'}/>
                    </div>
                </div>
                <div>
                    <label>Duration: </label>
                    <input type={'number'} min={1} name='duration' onChange={(e) => handleChange(e)}/>
                </div>
                    <label>Countries:</label>
               <div> 
                   <input type={'text'} name={'add country'} readOnly value={country}/>
                   <select id={'countries'} onChange={(e) => completeCountry(e)}>
                    {cNames?.map(n =>{
                        return (
                            <option  value={n} name={n} key={n}>{n}</option>
                        )
                        })}  
                    </select>  
                    <input type={'button'} value={'Add country'} onClick ={(e) => handleSelect(e)}/>
                </div>
                {countries.length>0 && countries.map(c =>
                    <div key={c}>
                        <span>{c}</span>
                        <button id={c} onClick={(e) => handleDelete(e)}>X</button>
                    </div>)}
                <div>
                    <button type='submit'>Create</button>
                </div>
                {response.success? <span>{response.success}</span> : <span>{response.error}</span>}
                
            </form>
        </div>
    );
};
