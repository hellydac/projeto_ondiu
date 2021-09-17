const mongoose = require("mongoose")

const estadoSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    estado: {
        type: String,
        required: true
    },
    cidade:{
        type: String,
        required: true
    },
    convenio: {
        type: String,
        required: true
    },
    medico: {
        type: String,
        required: true
    },
    endereco: {
        type: String,
        required: true
    },
    telefone: {
        type: Number,
        required: true
    },
    criadoEm: {
        type: Date,
        required: true,
        default: new Date
    },
}, {
    versionKey: false
})

module.exports = mongoose.model("estado", estadoSchema)

//cidade:
   //convenio: 
    //medica:
    //endereco
    //contato: