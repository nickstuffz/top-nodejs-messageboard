const express = require("express");
const app = express();

const path = require("node:path");
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

const indexRouter = require("./routes/indexRouter");

app.use("/", indexRouter);

const PORT = process.env.PORT || 8080;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`MessageBoard - listening on port ${PORT}!`);
});
