const axios= require ('axios');
export const GET_ALL_COUNTRIES = 'GET_ALL_COUNTRIES';
export const GET_COUNTRIES_BY_NAME = 'GET_COUNTRIES_BY_NAME';
export const GET_COUNTRY_BY_CODE = 'GET_COUNTRY_BY_CODE';
export const CREATE_ACTIVITY = 'CREATE_ACTIVITY';
export const FILTER_BY_ACTIVITY = 'FILTER_BY_ACTIVITY';
export const FILTER_BY_CONTINENT = 'FILTER_BY_CONTINENT';
export const SORT_ALPHABETICALLY = 'SORT_ALPHABETICALLY';
export const SORT_BY_POPULATION = 'SORT_BY_POPULATION';
export const GET_NAMES = 'GET_NAMES';
export const CLEAN_ERROR= 'CLEAN_ERROR';

export const getAllCountries = () => async dispatch => {
    return await fetch ('http://localhost:3001/countries/')
        .then( response => response.json())
        .then( countries => dispatch({
            type: GET_ALL_COUNTRIES,
            payload: countries
        }))
};

export const getCountriesNames = () => async dispatch => {
    return await fetch ('http://localhost:3001/countries/names')
        .then(response => response.json())
        .then(cn => dispatch ({
            type: GET_NAMES,
            payload: cn
        }))
}

export const getCountriesByName = (name) => async dispatch => {
    const countryName = name;
    return await fetch (`http://localhost:3001/countries/get?name=${countryName}`)
        .then (response => response.json())
        .then (countries => dispatch ({
            type: GET_COUNTRIES_BY_NAME,
            payload: countries
        }))
        .catch((e) => console.log(e))
};

export const getCountryById = (code) => async dispatch => {
    return await fetch (`http://localhost:3001/countries/${code}`)
        .then(response => response.json())
        .then(country => dispatch ({
            type: GET_COUNTRY_BY_CODE,
            payload: country
        }))
};

export const filterByActivity = (value) => {
    return {
            type: FILTER_BY_ACTIVITY,
            payload: value
    }
};


export const filterByContinent = (value) => {
    return {
        type: FILTER_BY_CONTINENT,
        payload: value
    }
};

export const sortAlphabetically = (order) => async dispatch => {
    return await fetch(`http://localhost:3001/sorts/byAlpha?order=${order}`)
        .then(response => response.json())
        .then(c => dispatch ({
            type: SORT_ALPHABETICALLY,
            payload: c
        }))
}
export const sortByPopulation = (order)=>async dispatch => {
    return await fetch (`http://localhost:3001/sorts/byPop?order=${order}`)
        .then(response => response.json())
        .then(countries => dispatch ({
            type: SORT_BY_POPULATION,
            payload: countries
        })); 

}
export function createActivity (info) {
    return async function (dispatch){
        console.log(info);
        const response = await axios.post('http://localhost:3001/activity', info);

        console.log(response)

        return dispatch ({
            type: CREATE_ACTIVITY,
            payload: response.data
        })
        
    }
    
}

export function cleanError(){
    return ({
        type: CLEAN_ERROR
    })
}