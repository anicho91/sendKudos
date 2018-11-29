const express = require("express");
const mongoose = require("mongoose");

const app = express();

const PORT = 8888;

// const PORT = process.env.PORT || 3000;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect(
  "mongodb://localhost/kudos",
  { useNewUrlParser: true }
);

require("./routes/api-routes.js")(app);
// require("./routes/html-routes.js")(app);

app.listen(PORT, function() {
  console.log("App listening on PORT " + `${PORT}`);
});
