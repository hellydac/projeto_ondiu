const express = require("express")
const router = express.Router()
const controller = require("../controllers/estadosControllers")

//READ - listar todos os Estados -> get -> find
//getAll,
//getById,
//createEstados,
//estadoJaExiste,
//updateEstadoById,
//deletarEstadoById

router.get('/estados', controller.getAll)
router.get('/:id', controller.getById)
router.post('/create', controller.createEstados)
router.delete('/delete/:id', controller.deletarEstadoById)
router.patch('/update/:id', controller.updateEstadoById)

module.exports = router

