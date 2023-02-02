const { Router } = require('express');
const getDetailGame = require('../../controlers/getDetailGame');
const routerFilterGames = Router();

routerFilterGames.get('/:id', async (req, res) => {
    const { id } = req.params;

    try {
        let detailGame = await getDetailGame(id);
        res.status(202).json(detailGame)
    } catch (error) {
        res.status(404).json({error: error.json})
    }
})



module.exports = routerFilterGames