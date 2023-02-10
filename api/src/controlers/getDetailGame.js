require('dotenv').config();
const axios = require("axios");
const { KEY_API } = process.env;


const getDetailGame = async (id) => {

    console.log('entró a getDetail');

    let url = `https://api.rawg.io/api/games/${id}?key=${KEY_API}`;

    

    /* console.log('url =>>>>>>>', await axios.get(url)); */

    try {
        let ofUrl = await axios.get(url)
        let toEstract = await ofUrl.data

        console.log('data =======> ', toEstract);
        /* console.log('results =>>> ', await toEstract) */
        
        /* console.log('relase =>>>>>>> ', toEstract.released)
        console.log('name =>>>>>>> ', toEstract.name) */

        return({
            id: toEstract.id,
            name: toEstract.name,
            description: toEstract.description.replace(/<[^>]+>/g, ''),
            released: toEstract.released,
            rating: toEstract.rating,
            background_image: toEstract.background_image,
            parent_platforms: toEstract.parent_platforms.map(platform => platform.platform.name),
            platf_especific: toEstract.platforms.map(platform => platform.platform.name),
            stores: toEstract.stores.map(store => store.store.name),
            genres: toEstract.genres.map(genre => genre.name),
            tags: toEstract.tags.map(tag => tag.name),
            image: toEstract.developers.map(img => img.image_background)
        });


        /* console.log('findDataGame =>>>>>>>> ', findDataGame) */
        /* return findDataGame */

    } catch (error) {
        console.log(error.message)
    }
}


module.exports = getDetailGame