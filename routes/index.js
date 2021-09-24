var express = require('express');
const { route } = require('../app');
var router = express.Router();

/*Get home page.*/
router.get('/', function(req, res, next){
    res.render('index', {title: 'express'});
})

router.get('/pruebaSession', function(req, res){
    if(req.session.numeroVisitas == undefined){
        req.session.numeroVisitas = 0;
    }
    req.session.numeroVisitas++;
    res.send('Session tiene el numero:' + req.session.numeroVisitas);
});

router.get('/mostrarNumeroSession', function(req, res){
    res.send('Session tiene el numero:' + req.session.numeroVisitas);
});


module.exports = router;