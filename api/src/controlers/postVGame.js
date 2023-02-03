const { Videogame, Genre } = require('../db.js');

const postVGame = async (data) => {

    const { name, description, released, rating, plataforms, genres } = data;

    try {
        /* console.log('Data =>>>>>> ', data); */

        if (data) {

            /* console.log('name =>>>>> ', plataforms); */

            const game = await Videogame.findOrCreate({
                where: {
                    name,
                    description,
                    released,
                    rating,
                    plataforms
                }
            })

            console.log('Genre =>>>>>> ')

            genres.forEach(async gen => {
                const [genre, created] = await Genre.findOrCreate({
                    where: {
                        name: [gen],
                    }
                });
                await game.addGenre(genre)
                console.log(created)
            })

            /* genres.forEach(async gen => {
                let [genre, created] = await Genre.findOrCreate({
                    where: {
                        name: [gen.name],
                    }
                });
                await game.addGenre(genre)
                console.log('createddd =>>>> ', created);
            }) */

        } else {
            throw new Error('faltan completar campos o algo has metido mal :O')
        }
    } catch (error) {
        return error.message
    }

}

module.exports = postVGame