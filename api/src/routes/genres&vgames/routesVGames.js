const { Router } = require('express');
const getAllVideogames = require('../../controlers/getAllVGames');
const getGameByName = require('../../controlers/getByNameQuery');
const postVGame = require('../../controlers/postVGame');
const routerVGames = Router();

routerVGames.get('/', async (req, res) => {
    const { name } = req.query;
    try {
        if (name) {
            console.log(req.query)
            let gameName = await getGameByName(name)
            res.status(202).json(gameName)
        } else {
            let ress = await getAllVideogames()
            res.status(202).json(ress)
        }
    } catch (error) {
        res.status(404).json({ error: error.message })
    }
})

routerVGames.post('/', async (req, res) => {
    console.log(req.body);
    try {
        let result = await postVGame(req.body)
        res.status(202).json(result)
    } catch (error) {
        res.status(404).json({ error: error.message })
    }

    /* try {
        const toPost = await Videogame.create({
            name,
            description,
            released,
            rating,
            plataforms,
            image,
            genres,
        });
        genres.forEach(async (element) => {
            const [genre, created] = await Genre.findOrCreate({
                where: {
                    name: element,
                }
            });
            await toPost.addGenre(genre)
            console.log(created)
        });

        res.status(200).json({ message: 'juego creado con éxito :D' })
    } catch (error) {
        console.log(error.message);
        res.status(404).json(error.message)
    } */
})

module.exports = routerVGames