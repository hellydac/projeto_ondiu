const express = require("express")

const app = express()
app.use(express.json())

const index = require('./src/routes/index')
app.use('/', index)

const db = require('./src/data/database')
db.connect()

const estadosRouter = require("./src/routes/estados.routes")
app.use("/estados", estadosRouter)



const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
});

