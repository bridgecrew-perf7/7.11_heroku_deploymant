const express = require(`express`);
require(`dotenv`).config();
const APP = express();

const PORT = process.env.PORT;

APP.get("*", (req, res) => {
    res.send(`hello home page`);
});


APP.listen(PORT, () => {
  console.log(`server listens on port: ${PORT}`);
});
