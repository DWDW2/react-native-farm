const z = require("zod");

const path = require("path");
const envPath = path.resolve(__dirname, `.env`);

require("dotenv").config({
  path: envPath,
});