const { Router } = require('express');
const getGenres = require('../../controlers/getGenres');
const routerGenre = Router();

routerGenre.get('/', async (req, res) => {
    
    try {
        const ress = await getGenres()
        res.status(200).json(ress)
    } catch (error) {
        res.status(404).json({error: error.message})
    }
})


module.exports = routerGenre