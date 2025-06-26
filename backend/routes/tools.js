
const express = require('express');
const router = express.Router();
const Tool = require('../models/Tool');

router.get('/', async (req, res) => {
  const tools = await Tool.find();
  res.json(tools);
});

router.post('/', async (req, res) => {
  const newTool = new Tool(req.body);
  await newTool.save();
  res.status(201).json(newTool);
});

router.put('/:id', async (req, res) => {
  const updatedTool = await Tool.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updatedTool);
});

router.delete('/:id', async (req, res) => {
  await Tool.findByIdAndDelete(req.params.id);
  res.json({ message: 'Tool deleted' });
});

module.exports = router;
