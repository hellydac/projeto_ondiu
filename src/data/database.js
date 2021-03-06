require('dotenv').config()
const mongoose = require("mongoose")

const MONGODB_URL = process.env.MONGODB_URI || 'mongodb://localhost:27017/ondiudb'

const connect = () => {mongoose.connect(MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true    
    })
    .then(console.log("Database conectada com sucesso."))
    .catch(err => console.err)
}

module.exports = { connect }