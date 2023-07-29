const {Turnos} = require('../db')

const turnos = ()=>{


    const tur = Turnos.findAll() 
    return tur
}
module.exports = {turnos}