const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const server = express();

//Route imports
const projectRouter = require('./routes/projectRouter');
const actionRouter = require('./routes/actionRouter');

//Middleware
server.use(helmet());
server.use(express.json());
server.use(cors());

server.use('/action', actionRouter);
server.use('/project', projectRouter);

// ---- ROUTES ---- //
//GET
server.get('/', (req, res) => {
  res.send('Welcome to the home page!');
});

module.exports = server;
