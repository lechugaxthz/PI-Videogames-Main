const { Videogame, Genre } = require('../db');

const postVGame = async (data) => {

    const { name, image, description, released, rating, plataforms, genres } = data;

    console.log('Videogame =>>>>>>> ', Videogame);
    console.log('Genre =>>>>>> ', Genre)

    try {

        if (data) {
            console.log('Data =>>>>>> ', data);

            /* console.log('name =>>>>> ', plataforms); */

            const game = await Videogame.create({
                where: {
                    name,
                    image,
                    description,
                    released,
                    rating,
                    plataforms,
                }
            })
            console.log('game =>>>>>>> ', game);

            genres.forEach(async gen => {
                const [genre, created] = await Genre.findOrCreate({
                    where: {
                        name: gen,
                    }
                });
                await game.addGenre(genre)
                console.log(created)
            })

            return game

        } else {
            throw new Error('faltan completar campos o algo has metido mal :O')
        }
    } catch (error) {
        return error.message
    }

}

module.exports = postVGame