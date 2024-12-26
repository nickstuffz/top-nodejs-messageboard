const express = require("express");
const app = express();

const path = require("node:path");
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

const indexRouter = require("./routes/indexRouter");

app.use("/", indexRouter);

const port = process.env.PORT || 8080;

app.listen(port, "::", () => {
  console.log(`Server listening on [::]${port}`);
});
