const axios = require ('axios');
const {Sequelize} = require ('sequelize');
const {Country} = require('../db.js');


const getAllCountries = async (req, res, next) => {
    try{
    const allCountriesFromApi = await axios.get('https://restcountries.com/v3/all')

    const countriesInfo = await allCountriesFromApi.data.map( country => {
        let capital = "null";
        if (typeof country.capital === 'object'){
             capital = country.capital[0];
        }
        return {
            id: country.cca3,
            name: country.name.common,
            flag: country.flags[1],
            continent: country.region,
            capital: capital,
            subregion: country.subregion,
            area: country.area,
            population: country.population

        }
    });
    
    const countries = await Country.bulkCreate(countriesInfo);
    res.json(countries);
} catch (e){
    next(e);
}
};

module.exports = {
    getAllCountries
}