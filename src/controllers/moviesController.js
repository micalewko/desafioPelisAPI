const db = require("../database/models");

let moviesController = {

  list: function(req, res, next){
    db.Peliculas.findAll()
      .then(function(result){
      res.json(result);
    })
  },
  find: function (req, res){
    db.Peliculas.findByPk(req.params.id)
    .then(function(result) {
        res.json(result)
    })
  },
  create: function(req, res, next){
    db.Peliculas.create({
      title: req.body.title,
      length: req.body.length,
      awards: req.body.awards,
      rating: req.body.rating
  });
  res.json ({
    status:200
  })
  }

}

module.exports = moviesController;