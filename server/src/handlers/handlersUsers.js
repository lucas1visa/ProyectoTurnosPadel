const {users,crearUsers}=require("../controllers/controllerUsers")
const getUsers = async(req,res)=>{
    try {
        todosLosUsuarios = await users()
        res.status(200).send(todosLosUsuarios)
    } catch (error) {
        res.status(400).send(error)
    }
}

const postUsers = async(req,res)=>{
    const {name,email,password} = req.body
    try {
        const crearUsuario = crearUsers(name,email,password)
        res.status(200).send("Se creo el usuario correctamente listo para reservar tu turno")
    } catch (error) {
        
    }
}

module.exports= {getUsers,postUsers}