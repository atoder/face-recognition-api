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

// temp disable of ssl cerficate source validation
// for testing
process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0;

const db = require("knex")({
  client: "pg",
  connection: {
    connectionString: process.env.DATABASE_URL,
    ssl: true,
  },
});

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send('it is working');
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

app.listen(process.env.PORT || 3000, () => {
  console.log(`app is running on port ${process.env.PORT}`);
});
