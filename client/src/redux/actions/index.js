export const GET_ALL_COUNTRIES = 'GET_ALL_COUNTRIES';
export const GET_COUNTRIES_BY_NAME = 'GET_COUNTRIES_BY_NAME';
export const GET_COUNTRY_BY_CODE = 'GET_COUNTRY_BY_CODE';
export const CREATE_ACTIVITY = 'CREATE_ACTIVITY';


export const getAllCountries = () => async dispatch => {
    return await fetch ('http://localhost:3001/countries/')
        .then( response => response.json())
        .then( countries => dispatch({
            type: GET_ALL_COUNTRIES,
            payload: countries
        }))
};

export const getCountriesByName = (name) => async dispatch => {
    return await fetch (`http://localhost:3001/countries/get?name=${name}`)
        .then (response => response.json())
        .then (countries => dispatch ({
            type: GET_COUNTRIES_BY_NAME,
            payload: countries
        }))
};

export const getCountryById = (code) => async dispatch => {
    return await fetch (`http://localhost:3001/countries/${code}`)
        .then(response => response.json())
        .then(country => dispatch ({
            type: GET_COUNTRY_BY_CODE,
            payload: country
        }))
};

export const createActivity = (info) => {
    return {
        type: CREATE_ACTIVITY,
        payload: info
    };
}