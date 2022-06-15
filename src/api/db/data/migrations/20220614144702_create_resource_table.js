/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("resource", function (table) {
    table.increments("id");
    table.string("name", 255).notNullable();
    table.integer("quantity_initial").notNullable();
    table.integer("quantity_remaining").notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("resource");
};
