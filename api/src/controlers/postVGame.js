const { Videogame, Genre } = require('../db');

const postVGame = async (data) => {

    const { name, image, description, released, rating, plataforms, genres } = data;

    console.log('Videogame =>>>>>>> ', Videogame);
    console.log('Genre =>>>>>> ', Genre)

    try {

        const game = await Videogame.create({
            name,
            image,
            description,
            released,
            rating,
            plataforms,
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

        return 'juego creado con exito :D'

    } catch (error) {
        return error.message
    }

}

module.exports = postVGame