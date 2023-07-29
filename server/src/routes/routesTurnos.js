const { Router } = require("express");
const {getTurnos,postTurnos,deleteTurno,updateTurno} = require("../handlers/handlersTurnos")
const  routesTurnos = Router();
routesTurnos.get("/" ,getTurnos)
routesTurnos.post("/" ,postTurnos)
routesTurnos.delete("/delete", deleteTurno);
routesTurnos.put("/update", updateTurno);

module.exports = routesTurnos;
