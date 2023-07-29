const { Router } = require("express");
const routesTurnos = require("./routesTurnos")
const routesUsers = require('./routesUsers')
const router = Router();
router.use("/turnos",routesTurnos)
router.use("/users", routesUsers)


module.exports = router;
