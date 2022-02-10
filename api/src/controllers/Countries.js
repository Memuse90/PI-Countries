const axios = require ('axios');
const {Sequelize} = require ('sequelize');
const {Country, Activity} = require('../db.js');


const getAllCountries = async (req, res, next) => {
    try{
        const created = await Country.findOne({where:{id: 'BRA'}})
        
        if (created === null){
            const allCountriesFromApi = await axios.get('https://restcountries.com/v3/all')

            const countriesInfo = await allCountriesFromApi.data.map( country => {
                let capital = "Not found";
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
        
        await Country.bulkCreate(countriesInfo);
        };        
    const countries = await Country.findAll({include: Activity})
    const activities = await Activity.findAll();
    const allInfo = [countries, activities]
    res.json(allInfo);
} catch (e){
    next(e);
}
};

const getCountriesByCode = async (req, res, next) => {
    try{
        const id = req.params.id;
        console.log(id)
        if (id.length === 3){
            const apiInfo = await axios.get(`https://restcountries.com/v3/alpha/${id}`);

            const countryInfo = await apiInfo.data.map( c => {
                return {
                    id: c.cca3,
                    name: c.name.common,
                    flag: c.flags[1],
                    continent: c.region,
                    capital: c.capital? c.capital[0] : 'Not found',
                    subregion: c.subregion,
                    area: c.area,
                    population: c.population
                }
            });
            let countryId = id.toUpperCase();
            const country =await Country.findByPk(countryId, {include: Activity});
            
            res.json(country);
    } else {
        res.send('The code is wrong')
    }
    } catch (e){
        next(e);
    }
};

const getCountriesByName = async (req, res, next) => {
    try{
        let name = req.query.name;
        
        if (name){
            const apiInfo = await axios.get(`https://restcountries.com/v3/name/${name}`);
            const countries = await apiInfo.data.map(c => {
                return {
                    id: c.cca3,
                    name: c.name.common,
                    flag: c.flags[1],
                    continent: c.region,
                    capital: c.capital? c.capital[0] : 'Not found',
                    subregion: c.subregion,
                    area: c.area,
                    population: c.population
                }
            })
            res.json(countries);
        } else {
            res.send('No query')
        }
    } catch(e){
        next(e); 
    }
};


module.exports = {
    getAllCountries,
    getCountriesByCode,
    getCountriesByName 
}