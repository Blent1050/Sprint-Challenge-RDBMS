const express = require('express');
const Action = require('../data/helpers/actionHelper');

const router = express.Router();
router.use(express.json());

router.get('/', async (req, res) => {
  try {
    action = await Action.get();
    res.status(200).json(action);
  } catch (error) {
    console.log(error);
    res.send(500).json({ Error: 'Cannot connect to server' });
  }
});

router.post('/', async (req, res) => {
  try {
    newAction = await Action.insert(req.body);
    res.status(201).json(newAction);
  } catch (error) {
    console.log(error);
    res.send(500).json({ Error: 'Cannot connect to server' });
  }
});

module.exports = router;
