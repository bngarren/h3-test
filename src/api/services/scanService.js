const { getAllResources } = require("../db/db");

const handleScanByUserAtLocation = async (userId, h3Index) => {
  // Query the database, perform some logic
  // Eventually return new data to the user

  try {
    return await getAllResources();
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = {
  handleScanByUserAtLocation,
};
