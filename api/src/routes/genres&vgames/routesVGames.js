const { Router } = require('express');
const getAllVideogames = require('../../controlers/getAllVGames');
const getGameByName = require('../../controlers/getByNameQuery');
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

/* routerVGames.post */




module.exports = routerVGames