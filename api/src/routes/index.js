const { Router } = require('express');
const routerGenre = require('./genres&vgames/routesGenres');
const routerFilterGames = require('./genres&vgames/routesGetGame');
const routerVGames = require('./genres&vgames/routesVGames');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/genres', routerGenre);
router.use('/videogame', routerFilterGames);
router.use('/videogames', routerVGames);

module.exports = router;
