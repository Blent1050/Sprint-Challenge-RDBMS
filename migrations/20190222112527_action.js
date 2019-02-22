exports.up = function(knex, Promise) {
    return knex.schema.createTable('action', function(tbl) {
      tbl.increments();
      tbl.string('name', 128).notNullable();
      tbl.timestamps(true, true);
      tbl
      .string('project_id')
      .unsigned()
      .references('id')
      .inTable('project')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('action');
  };