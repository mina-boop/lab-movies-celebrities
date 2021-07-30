
// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();
const Celebrity= require('../models/Celebrity.model');
router.get("/celebrities", (req, res, next) => {
  res.render("celebrities/celebrities");
});

router.get("/celebrities/create", (req, res, next) => {
  res.render("celebrities/new-celebrity");
});

router.post("/celebrities/create", (req, res, next) => {
  //console.log(req.body);
  const { name, occupation, catchPhrase } = req.body;
  Celebrity.create({ name, occupation, catchPhrase })
    .then(celebrityFromDB => console.log(`New celebrity created:${celebrityfromDB.name}.`))
    .catch(error=>next(error));

});

// all your routes here

module.exports = router;
