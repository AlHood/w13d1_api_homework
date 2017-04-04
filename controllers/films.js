//since we don't have a database we'll use our front end models at the moment
var films = require('../client/src/models/films')();
var Film = require('../client/src/models/film');
var Review = require('../client/src/models/review');

var express = require('express');
var filmRouter = express.Router();
var bodyParser = require('body-parser');

filmRouter.use(bodyParser.json());
filmRouter.use(bodyParser.urlencoded({extended: true}));
// var films = [{name: 'Star Trek'}, {name: 'Star Wars: The Force Awakens'}, {name: 'That youtube with the dog that talks'}]

filmRouter.get('/:id', function(req, res){
  res.json({data: films[req.params.id]});

});


filmRouter.put('/:id', function(req, res){
  var newFilm = new Film({
    title: req.body.name,
    actors: req.body.actors,
    genre: req.body.genre
  })
  films[req.params.id] = newFilm;
  res.json({data: films});
});

filmRouter.delete('/:id', function(req, res) {
  films.splice(req.params.id, 1);
  res.json({data: films});

});

filmRouter.get('/', function(req,res) {
  res.json(films);
});

filmRouter.post('/', function(req, res) {
  var newFilm = new Film({
    title: req.body.name,
    actors: req.body.actors,
    genre: req.body.genre
  })
  films.push(newFilm);
  res.json({data: films});
});




module.exports = filmRouter;

