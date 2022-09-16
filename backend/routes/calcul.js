var express = require('express');
var database = require('../database/connection')
var router = express.Router();
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'calculator'
});

connection.connect();


/* GET users listing. */
router.get('/:id', function(req, res, next) {
        connection.query(`SELECT * FROM calculs WHERE user_id= '${req.params.id}'`, function(err, rows, fields) {
        if (err){
            next(err)
        } else {
        res.json(rows);
        }
    })
});

router.post('/', function(req, res, next) {
        connection.query(`INSERT INTO calculs(user_id, calc, total) VALUES ('${req.body.user_id}','${req.body.calc}','${req.body.total}')`, function(err, rows, fields) {
        if (err){
            next(err)
        } else {
        res.json({'status': 200, "message": "New calc been send"});
        }
    })
})

module.exports = router;