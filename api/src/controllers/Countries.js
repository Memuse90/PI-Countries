const axios = require ('axios');
const {Op, Sequelize} = require ('sequelize');
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
            const countries = await Country.findAll({ where: {
                name:{
                    [Op.match]: Sequelize.fn('to_tsquery', name)
                }
            }});
            
        if(countries.length >0){    
            res.json({countries: countries, error:''});
        } else {
            res.send({error:'No existen coincidencias.'})
        }
        } else {
            res.send({countries: [], error:'No query'})
        }
    } catch(e){
        next(e); 
    }
};
const getCountriesNames = (req,res,next) =>{
    Country.findAll().then((countries) => {
        let countriesNames= countries.map(c => c.name).sort();
        res.json(countriesNames)
    }).catch(error => next(error))
// const getCountriesNames = async (req, res, next) => {
//     try{
//         let countries = await Country.findAll();

//         let countriesNames = countries.map( c => c.name).sort();

        
//         res.json(countriesNames);
        
//     } catch (e) {
//         next (e)
//     }
};


module.exports = {
    getAllCountries,
    getCountriesByCode,
    getCountriesByName,
    getCountriesNames 
}