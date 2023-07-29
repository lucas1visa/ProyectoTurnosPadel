const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
   sequelize.define('Turno', {
      id: {
         type: DataTypes.INTEGER,
         allowNull: false,
         primaryKey: true,
         autoIncrement: true
      },
      fecha: {
         type: DataTypes.DATE,
         allowNull: false
      },
      horaInicio: {
         type: DataTypes.TIME,
         allowNull: false
      },
      horaFin: {
         type: DataTypes.TIME,
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
