const express = require('express')
const config = require('../database')
const bodyParser = require('body-parser')
const router = express.Router()

router.use(bodyParser.urlencoded({ extended: false }))
router.use(bodyParser.json())

router.get('/', (req, res) => {
    config.query('SELECT * FROM employee',
        (error, results, fields) => {
            res.send(results)
        })
})

router.post('/', (req, res) => {
    config.query(`INSERT INTO employee 
                        (employeeId, firstName, lastName, image, email, password) 
                    VALUES 
                        ( null ,'${req.body.firstName}', '${req.body.lastName}', 
                        '${req.body.image}', '${req.body.email}', '${req.body.password}')`,
        (error, results) => {
            if (error) throw error;
            res.json(`employeeId : ${results.insertId}`)
        })
})

router.get('/:id', (req, res) => {
    config.query(`SELECT * FROM employee WHERE employeeId = ${req.params.id}`,
        (error, results, fields) => {
            res.send(results)
        })
})

router.put('/:id', (req, res) => {
    config.query(`UPDATE employee 
                    SET firstName = '${req.body.firstName}',
                        lastName = '${req.body.lastName}', 
                        image = '${req.body.image}' 
                    WHERE employeeId = ${req.params.id};`,
        (error, results, fields) => {
            if (error) throw error;
            res.json(`update : employeeId ${req.params.id}`)
        })
})


module.exports = router