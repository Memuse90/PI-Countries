import { CREATE_ACTIVITY, GET_ALL_COUNTRIES, GET_COUNTRIES_BY_NAME, GET_COUNTRY_BY_CODE } from "../actions";

const initialState = {
    countries: [],
    country: {},
    activities: []
}

export default function rootReducer (state = initialState, action) {
    switch (action.type){
        case GET_ALL_COUNTRIES:
            return {
                ...state,
                countries: action.payload[0],
                activities: action.payload[1]
            };
        case GET_COUNTRIES_BY_NAME:
            return {
                ...state,
                countries: action.payload
            };
        case GET_COUNTRY_BY_CODE:
            return {
                ...state,
                country: action.payload
            };
        case CREATE_ACTIVITY:
            return {
                ...state,
                activities: [...state.activities, action.payload]
            }            
        default: return {...state};    
    };
};