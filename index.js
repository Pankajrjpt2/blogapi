const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const router = require("./routes/routes");


const app = express();
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
    
});

app.use('/v1', router);


mongoose
  .connect(
    "mongodb+srv://pankaj:qwerty1234@blog.7o79k.mongodb.net/blog?retryWrites=true&w=majority",
    { useNewUrlParser: true }
  )
  .then(() => {
    app.listen(8001, () => {
      console.log("Runnig at http://localhost:8001");
    });
  })
  .catch((err) => console.log(err));
