const express  = require("express");
const bodyParser = require("body-parser");

const app = express();

app.listen(8080, () => {
    console.log('Runnig at http://localhost:8080');
})