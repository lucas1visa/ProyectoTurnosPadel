const {turnos,crearTurno} = require("../controllers/controllerTurnos")
const getTurnos =async(req,res)=>{
    try {
        const todosLosTurno = await turnos()
        res.status(200).send(todosLosTurno)
    } catch (error) {
        res.status(404).send(error)
    }
}

const postTurnos = async(req, res)=>{
    const {fecha,horaInicio,horaFin,nombreCliente,telefonoCliente,estado,usuarioId} = req.body
    if (!fecha || !horaInicio || !nombreCliente) {
        return res.status(400).send("fecha,horaInicio,horaFin,nombreCliente,telefonoCliente,estado,name, son necesarios");}
    try {
        const nuevoTurno = await crearTurno(fecha,horaInicio,horaFin,nombreCliente,telefonoCliente,estado,usuarioId)
        res.status(201).send("Turno cargado correctamente")
    } catch (error) {
      res.status(409).send(error.message);
    }
}



module.exports = {getTurnos,postTurnos}