const { Router } = require("express");
const routesTurnos = require("./routesTurnos")
const routesUsers = require('./routesTurnos')
const router = Router();
router.use("/turnos",routesTurnos)
router.use("/turnos", routesUsers)


module.exports = router;
