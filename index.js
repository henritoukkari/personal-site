import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static("public"));


app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("./partials/index.ejs");
  
});

app.get("/about", (req, res) => {
  res.render("./partials/about.ejs");
});

app.get("/projects", (req, res) => {
  res.render("./partials/projects.ejs");
});

app.get("/contact", (req, res) => {
  res.render("./partials/contact.ejs");
});



app.post("/submit", (req, res) => {


});

app.post("/submit", (req, res) => {


});


app.post("/submit", (req, res) => {


});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

