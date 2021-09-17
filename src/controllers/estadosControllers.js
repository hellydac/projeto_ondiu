const mongoose = require("mongoose");
const Estados = require("../models/estados");

const getAll = async (req, res) => {
    const estados = await Estados.find().populate("Estado");
    res.json(estados);
  };



const createEstados = async (req, res) => {
    const createEstados = new Estados({
      _id: new mongoose.Types.ObjectId(),
      estado: req.body.estado,
      cidade: req.body.cidade,
      convenio: req.body.convenio,
      medico: req.body.medico,
      endereco: req.body.endereco,
      telefone: req.body.telefone,
      criadoEm: req.body.criadoEm,
    })

const estadoJaExiste = await Estados.findOne({ 
    estado: req.body.estado,
    cidade: req.body.cidade,
    convenio: req.body.convenio,
    medico: req.body.medico,
    endereco: req.body.endereco,
    telefone: req.body.telefone
   })
  if (estadoJaExiste) {
    return res.status(409).json({ error: 'Estado já cadastrado' })
  }

  try {
    const newEstado = await createEstados.save()
    res.status(201).json(newEstado)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
};

const updateEstadoById = async (req, res) => {
  try {
    const estados = await Estados.findById(req.params.id);

    if (estados == null) {
      return res.status(404).json({ message: "Estado não encontrado" });
    }
    if (req.body.cidade != null) {
      estados.cidade = req.body.cidade;
    }
    if (req.body.convenio != null) {
      estados.convenio = req.body.convenio;
    }
    if (req.body.medico != null) {
      estados.medico = req.body.medico;
    }
    if (req.body.endereco != null) {
      estados.endereco = req.body.endereco;
    }
    if (req.body.telefone != null) {
      estados.telefone = req.body.telefone;
    }
    const estadoAtualizado = await estados.save();
    res.status(200).json(estadoAtualizado);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const deletarEstadoById = async (req, res) => {
  const estadosDelete = await Estados.findById(req.params.id);
  if (estadosDelete == null) {
    return res.status(404).json({ message: "Estado não encontrado." });
  }
  try {
    await estadosDelete.remove();
    res.status(200).json({ message: "Estado excluído com sucesso." });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getById = async (req, res) => {
  const estadosId = await Estados.findById(req.params.id);
  res.status(200).json(estadosId);
};

module.exports = {
  
  getAll,
  getById,
  createEstados,
  updateEstadoById,
  deletarEstadoById
};
