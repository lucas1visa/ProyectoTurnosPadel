const {turnos} = require("../controllers/controllerTurnos")
const getTurnos =(req,res)=>{
    try {
        const get = turnos()
        res.status(200).send(get)
    } catch (error) {
        res.status(404).send(error)
    }
}
module.exports = {getTurnos}