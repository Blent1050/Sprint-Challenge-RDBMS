const db = require('../dbConfig.js');

module.exports = {
  get,
  getById,
  insert,
  update,
  remove,
};

function get() {
  return db('project');
}

function getById(id) {
  return db('action as a')
    .join('project as p', 'p.id', 'a.project_id')
    .select('a.id', 'a.*', 'p.name as projectName')
    .where('a.project_id', id);
}

function insert(savings) {
  return db('project')
    .insert(savings)
    .then(ids => {
      return getById(ids[0]);
    });
}

function update(id, changes) {
  return db('project')
    .where({ id })
    .update(changes);
}

function remove(id) {
  return db('project')
    .where('id', id)
    .del();
}
