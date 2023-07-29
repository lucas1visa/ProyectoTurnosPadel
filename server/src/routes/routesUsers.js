const { Router } = require("express");
const {getUsers,postUsers} = require("../handlers/handlersUsers")
const  routesUsers = Router();
routesUsers.get("/" ,getUsers)
routesUsers.post("/" ,postUsers)
module.exports = routesUsers;
