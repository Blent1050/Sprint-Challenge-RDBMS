const db = require('../dbConfig.js');

module.exports = {
  get,
  getById,
  insert,
  update,
  remove,
};

function get() {
  return db('action');
}

function getById(id) {
  return db('action')
    .where({ id })
    .first();
}

function insert(savings) {
  return db('action')
    .insert(savings)
    .then(ids => {
      return getById(ids[0]);
    });
}

function update(id, changes) {
  return db('action')
    .where({ id })
    .update(changes);
}

function remove(id) {
  return db('action')
    .where('id', id)
    .del();
}
