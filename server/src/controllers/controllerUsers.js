const {User,Turno} = require('../db')
const users = async()=>{
    try {
        const todosLosUsuarios = await User.findAll({
            include: {
              model: Turno,
              attributes: ["fecha","horaInicio","horaFin"],
              through: { attributes: [] },
            },
          })
        return todosLosUsuarios
    } catch (error) {
        console.error("Error al obtener los Usuarios:", error);
        return null;
}
}

const crearUsers = async(name, email, password) => {
    try {
        const nuevoUsuario = await User.create({
            name, email, password
        });

        return nuevoUsuario;
    } catch (error) {
        console.error("Error al cargar el usuario:", error);
        return null;
    }
};
module.exports= {users,crearUsers}