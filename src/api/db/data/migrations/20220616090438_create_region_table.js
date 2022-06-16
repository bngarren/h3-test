/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("region", function (table) {
    table.string("id", 50).primary();
    table.timestamp("last_updated", { useTz: true }).defaultTo(knex.fn.now());
    table.timestamp("reset_time", { useTz: true });
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("region");
};
