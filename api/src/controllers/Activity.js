const {Country, Activity} = require('../db.js');
const {Sequelize} = require ('sequelize');

const createActivity = async (req, res, next) => {
    try{
        const {name, dificulty, duration, season, countries} = req.body;
        
        if(name && countries.length > 0){
            const [newActivity, created] = await Activity.findOrCreate({
               where: {
                name: name,
                dificulty: dificulty>=1 && dificulty<=5? dificulty : 1 ,
                duration: duration,
                season: season
            }
            });
            const relatedCountries = [];
            for (const country of countries ){
                let asociatedCountry = await Country.findOne({
                    where:{
                        name: country
                    }});
                relatedCountries.push(asociatedCountry.dataValues.id);
  
            };
            await newActivity.addCountries(relatedCountries);

            const activity = await Activity.findOne({where: {
                name: name
            }, include: Country});

            res.json(activity);
        } else {
            res.send('Refill the form.');
        }
    } catch (e) {
        next(e);
    }
    
};

module.exports = {
    createActivity,
};