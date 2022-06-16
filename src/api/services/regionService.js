const h3 = require("h3-js");
const { createRegion } = require("../db/db");

const handleCreateRegion = async (h3Index) => {
  const result = await createRegion(h3Index);
  return result;
};

module.exports = {
  handleCreateRegion,
};
