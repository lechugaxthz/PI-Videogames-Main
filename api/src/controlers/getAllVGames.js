require('dotenv').config();
const axios = require("axios");
const { Videogame, Genre } = require("../db.js")
const { KEY_API } = process.env;

const getAPIGames = async () => {

    console.log('entrooooooo')

    let url = `https://api.rawg.io/api/games?key=${KEY_API}`;

    const allVideoGames100 = [];

    try {
        for (let i = 0; i < 5; i++) { /* actualizar el numero de vueltas a 5, ahora está en 1 para no consumir tantos llamados */
            let ofUrl = await axios.get(url)
            ofUrl.data.results.map(games => {
                allVideoGames100.push({
                    id: games.id,
                    name: games.name,
                    bg_image: games.background_image,
                    released: games.released,
                    rating: games.rating,
                    genres: games.genres,
                    createdInDb: false
                    /* description: games.description, */
                    /* background_image: games.background_image, */
                    /* parent_platforms: games.parent_platforms.map(platform => platform.platform.name), */
                    /* platf_especific: games.platforms.map(platform => platform.platform.name), */
                    /* stores: games.stores.map(store => store.store.name), */
                    /* tags: games.tags.map(tag => tag.name), */
                    /* image: games.short_screenshots.map(img => img.image) */
                    /* saco algunas cosas de la petición para no estar sacando algo qeu en ese momento no voy
                    a necesitar. peroo, de igual modo algunas cosas no se van a usar explisitamente
                    pero me van a servir para asociar a ciertos filtros que pondré, como platforms o genres */
                });
            });
            url = ofUrl.data.next
        };



        /* console.log('TOOOODOSSSS LOS JUEGOOOOOOOSSSS =>>>>>>>> ', allVideoGames100) */
        return allVideoGames100;
    } catch (error) {
        console.log(error)
    }

}


const getDB_Games = async () => {

    try {

        const createdDB_games = await Videogame.findAll({
            include: [{
                model: Genre,
                atributes: ["name"],
                throught: {
                    atributes: []
                }
            }]
        })

        console.log('DB_games ========> ', createdDB_games);

        let resultOfDB = [];
        for (const key in createdDB_games) {
            if (createdDB_games.hasOwnProperty(key)) {
                resultOfDB.push(createdDB_games[key].dataValues);
            }
        }




        console.log('DB GAMES ========> ', resultOfDB)

        return resultOfDB

    } catch (error) {
        console.log(error);
    }
}


const getAllVideogames = async () => {

    try {
        let resAPI = await getAPIGames()
        let resDB = await getDB_Games()
        let allResults = resAPI.concat(resDB)
        return allResults
    } catch (error) {
        console.log(error);
    }

}


module.exports = { getAllVideogames, getDB_Games }