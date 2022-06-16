const h3 = require("h3-js");
const { scanService } = require("../services");

const scan = async (req, res, next) => {
  const { latitude, longitude } = req.body;
  const h3Index = h3.geoToH3(latitude, longitude, 9);

  try {
    const result = await scanService.handleScanByUserAtLocation(1, h3Index);
    res.send(result);
    next();
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = { scan };
