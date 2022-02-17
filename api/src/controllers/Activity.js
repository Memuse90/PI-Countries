const {Country, Activity} = require('../db.js');
const {Sequelize} = require ('sequelize');

const createActivity = async (req, res, next) => {
    try{
        const {name, dificulty, duration, season, countries} = req.body;
        
        if(name){
            const [newActivity, created] = await Activity.findOrCreate({
               where: {
                name: name,
                dificulty: dificulty>=1 && dificulty<=5? dificulty : 1 ,
                duration: duration,
                season: season
            }
            });
            if (countries.length > 0){
                const relatedCountries = [];
                for (const country of countries ){
                    const asociatedCountry = await Country.findOne({
                        where:{
                            name: country
                        }});
    
                    relatedCountries.push(asociatedCountry.dataValues.id);
    
                };
                await newActivity.addCountries(relatedCountries);
            };
            const activity = await Activity.findOne({where: {
                name: name
            }, include: Country});
        if(created){    
            res.json({success: 'Created successfully'})
        } else {
            res.json({success: 'The activity alredy exists'})
    };
        } else {
            res.send({error:'Refill the form.'});
        }
    } catch (e) {
        next(e);
    }
    
};

module.exports = {
    createActivity,
};