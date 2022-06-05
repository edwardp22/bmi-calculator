const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.set("view engine", "pug");
app.use("/static", express.static("public"));

app.get("/", (req, res) => {
  res.render("index", { age: "", weight: "", height: "", message: "" });
});

app.get("/:age/:weight/:height", (req, res) => {
  const { age = "", weight = "", height = "" } = req.params;
  let message = "";

  if (weight && height) {
    const BMI = weight / Math.pow(height / 100, 2);
    message = `Your BMI Result is: ${BMI.toFixed(2)}`;
  }

  res.render("index", { age, weight, height, message });
});

app.listen(port, () => console.log("Running on localhost " + port));
