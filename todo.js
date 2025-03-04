const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");
const app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
let items = ["Eat Food", "Attend Class", "Do Homework"];
let workItems = [];
app.get("/", (req, res) => {
  
  let day = date.gateDate();

  res.render("list", { listTitile: day, newListItems: items });
});
app.post("/", (req, res) => {
  let item = req.body.newItem;
  if (req.body.list === "work list") {
    workItems.push(item);
    res.redirect("/work");
  } else {
    items.push(item);
    res.redirect("/"); 
  }
});

// work List section
app.get("/work", (req, res) => {
  res.render("list", { listTitile: "work", newListItems: workItems });
});

app.listen(3000, () => { 
  console.log("Server is running on port 3000");
});


