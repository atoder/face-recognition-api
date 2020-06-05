const express = require("express");
//const bodyParser = require('body-parser');
const bcrypt = require("bcrypt-nodejs");
const cors = require("cors");
//const knex = require("knex");

require("dotenv").config();

const register = require("./controllers/register");
const signin = require("./controllers/signin");
const profile = require("./controllers/profile");
const image = require("./controllers/image");

// import env api setting
//console.log(process.env.CLARIFAI_API_KEY);

const db = require("knex")({
  client: "pg",
  connection: {
    host: "127.0.0.1",
    user: "atoder",
    password: "",
    database: "smart-brain",
  },
});

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  //db.select('*')
  //.from('users')
  //.then(function(users) {
  //  //res.json(users)
  //})
  //.catch(function(error) { console.error(error); });
});

app.post("/signin", (req, res) => { signin.handleSignin(req, res, db, bcrypt)})

app.post("/register", (req, res) => {register.handleRegister(req, res, db, bcrypt)})

// TODO: use this api endpoint later
app.get("/profile/:id", (req, res) => { profile.handleProfileGet(req, res, db)})

app.put("/image", (req, res) => { image.handleImage(req, res, db) })

app.post("/imageurl", (req, res) => {
  image.handleApiCall(req, res);
});

app.listen(3000, () => {
  console.log("app is running on port 3000");
});
