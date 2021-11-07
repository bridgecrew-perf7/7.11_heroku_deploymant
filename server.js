const express = require(`express`);
const APP = express();
const PORT = process.env.PORT;
require(`dotenv`).config();

APP.get("*", (req, res) => {
  res.send(`hello home page`);
});

APP.listen(PORT, () => {
  console.log(`server listens on port: ${PORT}`);
});
