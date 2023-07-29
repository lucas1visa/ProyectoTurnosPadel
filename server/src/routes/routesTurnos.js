const { Router } = require("express");
const {getTurnos} = require("../handlers/handlersTurnos")
const  routesTurnos = Router();
routesTurnos.get("/" ,getTurnos)

module.exports = routesTurnos;
