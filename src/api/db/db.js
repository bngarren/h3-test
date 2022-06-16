const knexConfig = require("./knexfile");
//initialize knex
const db = require("knex")(knexConfig[process.env.NODE_ENV]);

const getAllResources = async () => {
  return await db.select().from("resource");
};

module.exports = { db, getAllResources };
