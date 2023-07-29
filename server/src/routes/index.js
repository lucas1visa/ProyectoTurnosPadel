const { Router } = require("express");
const routesTurnos = require("./routesTurnos")
const router = Router();
router.use("/turnos",routesTurnos)

module.exports = router;
