const { Router } = require("express");
const {getTurnos,postTurnos} = require("../handlers/handlersTurnos")
const  routesUsers = Router();
routesUsers.get("/" ,getTurnos)
routesUsers.post("/" ,postTurnos)


module.exports = routesUsers;
