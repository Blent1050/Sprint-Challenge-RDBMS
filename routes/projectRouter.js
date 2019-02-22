const express = require('express');
const Project = require('../data/helpers/projectHelper');

const router = express.Router();
router.use(express.json());

router.get('/', async (req, res) => {
  try {
    const project = await Project.get();
    res.status(200).json(project);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Server Error!' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const project = await Project.getById(req.params.id);
    const actions = await Project.getActions(req.params.id);

    const projectActions = { ...project, actions };
    res.status(200).json(projectActions);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Server error!' });
  }
});

router.post('/', async (req, res) => {
  try {
    const newProject = await Project.insert(req.body);
    res.status(201).json(newProject);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Server Error!' });
  }
});

module.exports = router;
