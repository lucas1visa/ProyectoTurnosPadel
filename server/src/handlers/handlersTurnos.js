const {turnos,crearTurno,deleteTurnoUsers,updateTurnoUsers} = require("../controllers/controllerTurnos")
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

const deleteTurno = async(req,res)=>{
    const {id}= req.body
    const delet = await deleteTurnoUsers(id)
    try {
        res.status(200).send("Se elimino el turno correctamente")
    } catch (error) {
      res.status(409).send(error.message);

    }
}
const updateTurno = async(req,res)=>{
    const {id,estado} = req.body
    const update = await updateTurnoUsers(id,estado)
    try {
        if(estado === "confirmado"){
        return res.status(200).send("Se Confimo turno correctamente")}
        if(estado === "cancelado"){
        return res.status(200).send("Se cancelo el turno")}
    } catch (error) {
      res.status(409).send(error.message);

    }
}

module.exports = {getTurnos,postTurnos,deleteTurno,updateTurno}