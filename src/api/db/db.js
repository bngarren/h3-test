const knexConfig = require("./knexfile");
//initialize knex
const db = require("knex")(knexConfig[process.env.NODE_ENV]);

const getRegions = async (indices) => {
  return await db("region").select().whereIn("id", indices);
};

const createRegion = async (h3Index) => {
  try {
    return await db.transaction(async (trx) => {
      // Ensure this region doesn't already exist
      const select = await trx.select("id").from("region").where("id", h3Index);

      if (select.length !== 0) {
        throw new Error(`Could not createRegion (${h3Index}) - already exists`);
      }

      const inserted = await trx
        .insert({ id: h3Index })
        .into("region")
        .returning("*");
      console.log("Created new region in db:", inserted);
      return inserted;
    });
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = { db, getRegions, createRegion };
