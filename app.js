const express = require("express");
const app = express();

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

app.listen(3000, () => console.log("Running on localhost 3000"));
