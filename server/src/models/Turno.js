const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
   sequelize.define('Turno', {
      id: {
         type: DataTypes.UUID,
         defaultValue: DataTypes.UUIDV4,
         primaryKey: true,
      },
      fecha: {
         type: DataTypes.STRING,
         allowNull: false
      },
      horaInicio: {
         type: DataTypes.STRING,
      },
      horaFin: {
         type: DataTypes.STRING,
         allowNull: false
      },
      nombreCliente: {
         type: DataTypes.STRING,
         allowNull: true
      },
      telefonoCliente: {
         type: DataTypes.STRING,
         allowNull: true
      },
      estado: {
         type: DataTypes.ENUM('pendiente', 'confirmado', 'cancelado'),
         allowNull: false,
         defaultValue: 'pendiente'
      }
   }, 
   { timestamps: false });
};
