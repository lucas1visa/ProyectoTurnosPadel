// Importar el modelo "Turnos" desde el archivo '../db'
const { Turno } = require("../db");

// Definir la función "turnos" como asíncrona para trabajar con await
const turnos = async () => {
  try {
    // Esperar la resolución de la promesa devuelta por Turnos.findAll()
    const turnosData = await Turno.findAll();
    return turnosData; // Retornar los datos de los turnos
  } catch (error) {
    // Manejo de errores en caso de que ocurra un problema al obtener los turnos
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
  name,
) => {
//   const existingActivity = await Turno.findOne({ where: { horaInicio } });
//   if (existingActivity) {
//     throw new Error("Turno no disponible");
//   }
  const nuevoTurno = await Turno.create({
    fecha,
    horaInicio,
    horaFin,
    nombreCliente,
    telefonoCliente,
    estado,
  });
//   await nuevoTurno.setUsers(name)
  return nuevoTurno
};

// Exportar la función "turnos" para poder utilizarla en otros archivos
module.exports = { turnos, crearTurno };
