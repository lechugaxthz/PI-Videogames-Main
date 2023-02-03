require('dotenv').config();
const axios = require('axios')
const { KEY_API } = process.env;
const { conn, Genre } = require('../db.js')


const getGenres = async () => {

    /* console.log('mi genre =>>>>>>', Genre) */
    try {

        /* console.log('>>>> DEBES AGREGARME HDTPM <<<<'); */
        /* ésta mierda tengo que trabajarla asi ?????? */
        /* console.log('conn =>>>>>> ', conn.models.Genre)
        console.log('Genre =>>>>>> ', Genre)*/
        let genres = []

        const url = await axios.get(`https://api.rawg.io/api/genres?key=${KEY_API}`)
            .then(res => res.data)
        url.results.forEach(genero => genres.push({ name: genero.name }))

        /* console.log('all =>>>>>>> ', all) */

        /* console.log('only =>>>', onlyGenre) */

        // de ser necesario carga los datos a la tabla de generos 

        genres.forEach(element => {
            Genre.findOrCreate({
                where: {
                    name: [element.name]
                }
            })
        });
        
        console.log('genres =>>>>>> ',genres)

        return genres

    } catch (error) {
        console.log(error)
    }

}

module.exports = getGenres



