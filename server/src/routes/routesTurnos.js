const { Router } = require("express");
const {getTurnos,postTurnos} = require("../handlers/handlersTurnos")
const  routesTurnos = Router();
routesTurnos.get("/" ,getTurnos)
routesTurnos.post("/" ,postTurnos)


module.exports = routesTurnos;
