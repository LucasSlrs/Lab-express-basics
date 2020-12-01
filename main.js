// Call framworks
const { response } = require("express");
const express = require("express");
const hbs = require("hbs");
const app = express();
//Define public folder
app.use(express.static(__dirname + "/public"));

//setup views folder
app.set("views", __dirname + "/views");

//render with hbs as templating engine
app.set("view engine", "hbs");

//hbs expect the initial view file to be called layout.hbs
app.get("/", (require, response) =>{
    response.render("home");
});
app.get("/about", (require, response) =>{
    response.render("about");
});
app.listen(3000, () => {
    console.log("server is ready at: http://localhost:3000");
});

