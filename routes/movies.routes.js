// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();

router.get("/movies", (req, res, next) => {
  res.render("movies/movies");
});

router.get("/movies/:id", (req, res, next) => {
  res.render("movies/movie-details");
});

router.get("/movies/new-movie", (req, res, next) => {
  res.render("movies/new-movie");
});

router.get("/movies/edit-movie",(req,res,next)=>{
    res.render("movies/edit-movie")
});

// all your routes here

module.exports = router;
