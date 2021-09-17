const express = require("express")
const cors = require("cors")
app.use(cors())

const app = express()
app.use(express.json())

const db = require("./src/data/database")
db.connect()

const estadosRouter = require("./src/routes/estados.routes")
app.use("/estados", estadosRouter)

module.exports = app