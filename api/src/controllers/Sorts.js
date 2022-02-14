const {Country, Activity}= require ('../db');
const axios = require ('axios'); 

const sortByPopulation = async (req, res, next) => {
    try{  
        const {order} = req.query;  
        const countriesAll = await Country.findAll();

        let countries = await Country.findAll();
        let aux = {};
        for (let i= 0; i<countries.length; i++){
            for (let j = i + 1; j<countries.length; j++){
                if (countries[i].population > countries[j].population){
                    aux = countries[i];
                    countries[i] = countries[j];
                    countries[j] = aux;
                }
            };
        };
        if (order === 'asc'){
            res.json(countries);
        } else if (order === 'desc'){
            let countriesDes = countries.reverse();
            res.json(countriesDes);
        } else {
            res.json(countriesAll);
        }
        
        } catch (e) {
        next (e)
        };

};

const sortAlphabetically = async (req, res, next) => {
    try{  
        const {order} = req.query;  
        const countriesAll = await Country.findAll();

        let countries = await Country.findAll();
        let aux = {};
        for (let i= 0; i<countries.length; i++){
            for (let j = i + 1; j<countries.length; j++){
                if (countries[i].name > countries[j].name){
                    aux = countries[i];
                    countries[i] = countries[j];
                    countries[j] = aux;
                }
            };
        };
        if (order === 'asc'){
            res.json(countries);
        } else if (order === 'desc'){
            let countriesDes = countries.reverse();
            res.json(countriesDes);
        } else {
            res.json(countriesAll);
        }
        
        } catch (e) {
        next (e)
        };


}

module.exports = {
    sortByPopulation,
    sortAlphabetically
}