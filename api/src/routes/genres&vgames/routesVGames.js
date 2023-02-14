const { Router } = require('express');
const { getAllVideogames, getDB_Games } = require('../../controlers/getAllVGames');
const getGameByName = require('../../controlers/getByNameQuery');
const postVGame = require('../../controlers/postVGame');
const routerVGames = Router();

routerVGames.get('/', async (req, res) => {
    const { name } = req.query;
    try {
        if (name) {
            console.log(req.query)
            let gameName = await getGameByName(name)
            let dbGame = await getDB_Games()
            dbGame = dbGame.filter(game => game.name.toLowerCase().includes(name.toLocaleLowerCase()))
            res.status(202).json(gameName.concat(dbGame))
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
})

module.exports = routerVGames