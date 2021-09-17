const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.status(200).json({
        "title": "on12-api-final-ondiu",
        "version": "1.0.0",
        "mensagem": "Bem-vinde à Ondiu? Nessa API você encontrará por estado, médicas/os ou hospitai, públicos e privados, que fazem a inserção do Diu de Cobre"
    });
})

module.exports = router