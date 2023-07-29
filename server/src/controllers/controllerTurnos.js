const { User, Turno } = require("../db");

const turnos = async () => {
  try {
    const turnosData = await Turno.findAll({
      include: {
        model: User,
        attributes: ["name"],
        through: { attributes: [] },
      },
    });
    return turnosData;
  } catch (error) {
    console.error("Error al obtener los turnos:", error);
    return null;
  }
};

const crearTurno = async (
  fecha,
  horaInicio,
  horaFin,
  nombreCliente,
  telefonoCliente,
  estado,
  usuarioId,
) => {
  try {
    const nuevoTurno = await Turno.create({
      fecha,
      horaInicio,
      horaFin,
      nombreCliente,
      telefonoCliente,
      estado,
    });
    
    const usuario = await User.findByPk(usuarioId);
    await nuevoTurno.addUser(usuario); // Utiliza addUser para establecer la relación

    return nuevoTurno;
  } catch (error) {
    console.error("Error al crear el turno:", error);
    return null;
  }
};

module.exports = { turnos, crearTurno };
