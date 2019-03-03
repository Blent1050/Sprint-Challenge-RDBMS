const db = require('../dbConfig.js');

module.exports = {
  get,
  getById,
  getActions,
  insert,
  update,
  remove,
};

function get() {
  return db('project');
}
function getById(id) {
  return db('project')
    .where({ id })
    .first();
}

function getActions(id) {
  return db('action as a')
    .join('project as p', 'p.id', 'a.project_id')
    .select(
      'p.id as Project ID',
      'p.name as Project',
      'p.description as description'
    )
    .select(
      'p.completed',
      'a.id as actionId',
      'a.description as actionDescription',
      'a.notes'
    )
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
