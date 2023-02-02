require('dotenv').config();
const axios = require("axios");
const { KEY_API } = process.env;


const getGameByName = async (name) => {

    console.log('pudiste entrar mi loco :D')

    let API_URL = `https://api.rawg.io/api/games?key=${KEY_API}`

    let all = await axios.get(API_URL);

    let result = all.data.results

    if (!result) throw Error('o te quedaste sin llamados o no hay juegos')

    let games = result.filter(obj => obj.hasOwnProperty('name'))
        .map(obj => obj.name);

    console.log(games)

    games = games.filter(n => n.includes(name))

    console.log('results =>>>>> ', games)


}

module.exports = getGameByName