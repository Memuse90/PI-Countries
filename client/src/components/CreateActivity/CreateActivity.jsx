import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { createActivity, getCountriesNames } from '../../redux/actions';
import Cr from './CreateActivity.module.css';

export default function CreateActivity () {

    const dispatch = useDispatch();

    const cNames = useSelector(state => state.countriesNames);

    React.useEffect( () => dispatch (getCountriesNames()), [dispatch]
    )
    const [input, setInput] = React.useState({
        name:'',
        dificulty: 0,
        duration: 0,
        season: '',
        countries: []
    });

    const [error, setError] = React.useState("");

    function validateName(e){
        if(!/^(\w+)$/.test(e.target.value)){
            setError("Name shouldn't have spaces,numbers or any other special character");
        } else {
            setError('');
        }
        setInput({...input, [e.target.name]: e.target.value})
    };

    function handleChange (e){
        setInput({...input, [e.target.name]: e.target.value})
        console.log(input)
    }
     function handleSelect(e){
         let c = input.countries.push(e.target.value);
         console.log(c)
         setInput({...input, countries: c})
     }
    function handleSubmit (e) {
        e.preventDefault();

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
                    <input key={'Spring'}type={'radio'} name='season' onClick={(e) => handleChange(e)} value={'Spring'}/>
                    <label>Summer</label>
                    <input key={'Summer'} type={'radio'} name='season' onClick={(e) => handleChange(e)} value= {'Summer'}/>
                    <label>Autumm</label>
                    <input key={'Autumm'} type={'radio'} name='season' onClick={(e) => handleChange(e)} value= {'Autumm'}/>
                    <label>Winter</label>
                    <input key={'Winter'} type={'radio'} name='season' onClick={(e) => handleChange(e)} value= {'Winter'}/>
                    </div>
                </div>
                <div>
                    <label>Duration: </label>
                    <input type={'number'} min={1} name='duration' onChange={(e) => handleChange(e)}/>
                </div>
                    <label>Countries:</label>
               <div> <select>
                    {cNames?.map(n =>{
                        return (
                            <option onClick={(e) => handleSelect(e)} value={n} name={'countries'} key={n}>{n}</option>
                        )
                        })}  
                    </select>
                    <button onClick={(e) => handleSelect(e)}>Add</button>  
                </div>
                <div>
                    <button type='submit'>Create</button>
                </div>
                
            </form>
        </div>
    );
};
