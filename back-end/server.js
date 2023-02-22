const express = require("express");
require("dotenv").config();
const connectDB = require("./coneectDB/coneectDB");
const cors=require("cors");

const app = express();
app.use(express.json());
app.use(cors());

connectDB();

app.use("/blogs", require("./routes/blogs"));
app.get('/', (req, res) => {
    res.send('Hello World!')
  })

const port = process.env.PORT || 5000;
app.listen(port, (err) =>
  err ? console.log(err) : console.log(`Example app listening on port ${port}!`)
);