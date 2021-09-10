const mongoose = require("mongoose")

const estadosSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    estado: {
        type: String,
        required: true
    },
    criadoEm: {
        type: Date,
        required: true,
        default: new Date
    }
})

module.exports = mongoose.model("estado", estadosSchema)

//cidade:
  //  convenio: 
    //medica:
    //endereco
    //contato: