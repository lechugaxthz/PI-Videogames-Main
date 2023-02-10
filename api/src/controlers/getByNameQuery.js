require('dotenv').config();
const axios = require("axios");
const { KEY_API } = process.env;


const getGameByName = async (name) => {

    console.log('pudiste entrar mi loco :D')

    let API_URL = `https://api.rawg.io/api/games?search=${name}&key=${KEY_API}&page_size=15`

    let all = await axios.get(API_URL);

    let result = all.data.results

    if (!result) throw Error('o te quedaste sin llamados o no hay juegos')

    
    let games = [];

    result.map(obj => {
        
        games.push({
            id: games.id,
            name: obj.name,
            bg_image: obj.background_image,
            rating: obj.rating,
            released: games.released,
            /* parent_platforms: obj.parent_platforms.map(platform => platform.platform.name) */
        })
        console.log(games)
    });

    console.log('results =>>>>> ', games)
    return games
}

module.exports = getGameByName