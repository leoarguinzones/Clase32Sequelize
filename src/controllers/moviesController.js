const db = require('../database/models')
const Op = db.Sequelize.Op;

const moviesController = {
    list: (req, res) => {        
    db.movies.findAll()
            .then(function(resultados){
                peliculas = resultados;
                res.render('moviesList', {movies : peliculas}); 
                //al render le pasamos el nombre de la vista             
            })       
        
    },
    detail: (req, res) => {
        db.movies.findByPk(req.params.id)
            .then (function(resultado){
                    res.render('moviesDetail', {movie:resultado});
            })
        
    },
    new: (req, res) => {db.movies.findAll({ order: [['release_date', 'DESC']]})
        .then(function(resultados){
            peliculas = resultados;
            res.render('newestMovies', {movies : peliculas}); 
            //al render le pasamos el nombre de la vista             
        })

        
    },
    recomended: (req, res) => {db.movies.findAll({ order: [['rating', 'DESC']]})
    .then(function(resultados){
        peliculas = resultados;
        res.render('recommendedMovies', {movies : peliculas}); 
        //al render le pasamos el nombre de la vista             
    })},

    add: (req, res) => {
        

    },
    create: (req, res) => {
        db.movies.create({
            title: req.body.title,
            rating: req.body.rating,
            awards: req.body.awards,
            release_date: req.body.release_date,
            length: req.body.length
        })
        res.redirect('/movies'); //al redirect le pasamos el nombre de la ruta

    },
    edit:(req, res) => {  
        db.movies.findByPk(req.params.id)
            .then (function(resultado){
                    res.render('moviesEdit', {Movie:resultado});
            })

    },
    update: (req, res) => {  
        db.movies.update({
            title: req.body.title,
            rating: req.body.rating,
            awards: req.body.awards,
            release_date: req.body.release_date,
            length: req.body.length
        },
        {
            where:{
                id: req.params.id
        }
        })

        res.redirect('/movies');
    },
    delete: (req, res) => {          
        db.movies.findByPk(req.params.id)
        .then (function(resultado){
                res.render('moviesDelete', {Movie:resultado});
        })
    

    },
    destroy: (req, res) => {  

        db.movies.destroy({
            where:{
                id: req.params.id
            }
        })
        res.redirect('/movies');

    }

}

module.exports = moviesController;