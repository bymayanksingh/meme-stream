const express = require("express");
const routes = require("./routes/v1");
const mongoose = require("mongoose");
const captureDateMiddleware = require("./middleware/middleware");
const cors = require("cors");
const config = require("./config/config");
const mongourl = require("./mongourl");
const app = express();

app.use(cors());
app.use(express.json());

app.use(captureDateMiddleware);

app.use("/v1", routes);
mongoose
  .connect(mongourl.url, config.mongoose.options)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(config.port, () => {
      console.log(`App is running on port ${config.port}`);
    });
  });
