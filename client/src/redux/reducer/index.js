import { CLEAN_ERROR, CREATE_ACTIVITY, FILTER_BY_ACTIVITY,FILTER_BY_CONTINENT, GET_ALL_COUNTRIES, GET_COUNTRIES_BY_NAME, GET_COUNTRY_BY_CODE, GET_NAMES, SORT_ALPHABETICALLY, SORT_BY_POPULATION } from "../actions";

const initialState = {
    countries: [],
    allCountries: [],
    country: {},
    activities: [],
    countriesNames: [],
    newActivity: {},
    error:''
}

export default function rootReducer (state = initialState, action) {
    switch (action.type){
        case GET_ALL_COUNTRIES:
            return {
                ...state,
                allCountries: action.payload[0],
                countries: action.payload[0],
                activities: action.payload[1]
            };
        case GET_COUNTRIES_BY_NAME:
            if(action.payload.countries){
                return {
                    ...state,
                    countries: action.payload.countries
                }
            } else{
            return {
                ...state,
                error: action.payload.error

            }};
        case GET_COUNTRY_BY_CODE:
            return {
                ...state,
                country: action.payload
            };
        case GET_NAMES:
            return {
                ...state,
                countriesNames: action.payload
            }   
        case FILTER_BY_ACTIVITY:
            const allCountries = state.allCountries;
            let filteredCountries = [];
            if (action.payload !== 'All'){
                for (let i = 0; i<allCountries.length; i++){
                    if (allCountries[i].activities.length > 0){
                        for (let j = 0; j<allCountries[i].activities.length; j++){
                            if (allCountries[i].activities[j].name === action.payload){
                                filteredCountries.push(allCountries[i]);
                            }
                        }
                    }
                };
            } else {
                filteredCountries = allCountries;
            }
            return {
                ...state,
                countries: filteredCountries
            };  
        case FILTER_BY_CONTINENT:
            const countries = state.allCountries;
            let filteredCs = action.payload === 'All'? countries: countries.filter(c => c.continent === action.payload);

            return {
                ...state,
                countries: filteredCs
            };    
        case SORT_ALPHABETICALLY:
            return {
                ...state,
                countries: action.payload
            };   
        case SORT_BY_POPULATION:
            return {
                ...state,
                countries: action.payload
            }       
        case CREATE_ACTIVITY:
            return {
                ...state,
                newActivity: action.payload
            };  
        case CLEAN_ERROR:
            return {
                ...state,
                error: ''
            }              
        default: return {...state};    
    };
};