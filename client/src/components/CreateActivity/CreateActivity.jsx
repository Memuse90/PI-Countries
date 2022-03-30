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

        <div className={Cr.all}>
        
                <nav className={Cr.nav}>
                    <Link className={Cr.link} to='/home'>Home</Link>
                </nav>
        
            <h1>Create Activity</h1>
            <form className={Cr.form} onSubmit={(e) => handleSubmit(e)}>
               <div className={Cr.item}> 
                    <div className={Cr.name}>
                        <label>Name: </label>
                        <br/>
                        <input className={Cr.input}  name='name' placeholder='Activity name' onClick={(e) => validateName(e)}/>
                    </div>
                    {!error? null:<span className={Cr.error}>{error}</span>}
                </div>
                <div className={Cr.season} > 
                    <label>Dificulty: </label>
                    <div>
                        <label>1</label>
                        <input  key={'1'} type={'radio'} name='dificulty' onClick={(e) => handleChange(e)} value={'1'}/>
                        <label>2</label>
                        <input key={'2'} type={'radio'} name='dificulty' onClick={(e) => handleChange(e)} value= {'2'}/>
                        <label>3</label>
                        <input key={'3'} type={'radio'} name='dificulty' onClick={(e) => handleChange(e)} value= {'3'}/>
                        <label>4</label>
                        <input key={'4'} type={'radio'} name='dificulty' onClick={(e) => handleChange(e)} value= {'4'}/>
                        <label>5</label>
                        <input key={'5'} type={'radio'} name='dificulty' onClick={(e) => handleChange(e)} value= {'5'}/>
                    </div>
                </div>
                <div className={Cr.season} >
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
                <div className={Cr.item}>
                    <label>Duration: </label>
                    <input className={Cr.input}  type={'number'} min={1} name='duration' onChange={(e) => handleChange(e)}/>
                </div>
                    
               <div className={Cr.coun}> 
                   {/* <input className={Cr.input}  type={'text'} name={'add country'} placeholder='Country' readOnly value={country}/> */}
                   <div className={Cr.coun2}>
                    <select className={Cr.input}  id={'countries'} onChange={(e) => completeCountry(e)}>
                        {cNames?.map(n =>{
                            return (
                                <option  value={n} name={n} key={n}>{n}</option>
                            )
                            })}  
                        </select>  
                        <input className={Cr.btnadd} type={'button'} value={'Add country'} onClick ={(e) => handleSelect(e)}/>
                   </div>
                </div>
                <div className={Cr.countries}>
                {countries.length>0 && countries.map(c =>
                    <div key={c}>
                        <span>{c}</span>
                        <button className={Cr.btndel} id={c} onClick={(e) => handleDelete(e)}>x</button>
                    </div>)}
                </div>
                <div>
                    <button className={Cr.btncreate} type='submit'>Create</button>
                </div>
                <br/>
                {response.success? <span className={Cr.message}>{response.success}</span> : <span className={Cr.error}>{response.error}</span>}
                
            </form>
        </div>
    );
};
