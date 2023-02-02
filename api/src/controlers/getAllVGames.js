require('dotenv').config();
const axios = require("axios");
const { KEY_API } = process.env;

const getAllVideogames = async () => {

    console.log('entrooooooo')

    let url = `https://api.rawg.io/api/games?key=${KEY_API}`;

    const allVideoGames100 = [];

    try {
        for (let i = 0; i < 5; i++) {
            let ofUrl = await axios.get(url)
            ofUrl.data.results.map(games => {
                allVideoGames100.push({
                    id: games.id,
                    name: games.name,
                    description: games.description,
                    relase: games.relase,
                    rating: games.rating,
                    background_image: games.background_image,
                    parent_platforms: games.parent_platforms.map(platform => platform.platform.name),
                    platf_especific: games.platforms.map(platform => platform.platform.name),
                    stores: games.stores.map(store => store.store.name),
                    genres: games.genres.map(genre => genre.name),
                    tags: games.tags.map(tag => tag.name),
                    image: games.short_screenshots.map(img => img.image)
                });
            });
            url = ofUrl.data.next
        };
        console.log('TOOOODOSSSS LOS JUEGOOOOOOOSSSS =>>>>>>>> ',allVideoGames100)
        return allVideoGames100;
    } catch (error) {
        console.log(error.message)
    }

}

module.exports = getAllVideogames