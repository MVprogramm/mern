const express = require("express");
const config = require("config");
const mongoose = require("mongoose");

const app = express();
app.use(express.json({ extendet: true }))
app.use("/api/auth", require("./routes/auth.routes"));
app.use("/api/link", require("./routes/link.routes"));
const PORT = config.get("port") || 5000;
async function start() {
  try {
    await mongoose.connect(config.get("mongoUri"), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    app.listen(PORT, () => {
      console.log(`App has been started on the port ${PORT}...`);
    });
  } catch (error) {
    console.log("Server ERROR: ", error.message);
    process.exit(1);
  }
}

start();
