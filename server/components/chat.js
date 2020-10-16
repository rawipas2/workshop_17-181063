const express = require('express')
const config = require('../database')
const bodyParser = require('body-parser')
const router = express.Router()

router.use(bodyParser.urlencoded({ extended: false }))
router.use(bodyParser.json())

router.get('/', (req, res) => {
    config.query('SELECT * FROM chat',
        (error, results, fields) => {
            res.send(results)
        })
})

router.get('/emp', (req, res) => {
    config.query(`
                    SELECT chat.chatId , 
                        chat.message ,
                        employee.employeeId , 
                        employee.firstName, 
                        employee.lastName, 
                        employee.image 
                    FROM chat RIGHT JOIN employee ON 
                        chat.employee = employee.employeeId 
                    ORDER BY chat.chatId
                `,
    (error, results, fields) => {
        let value = []
        for (let i = 0 ; i < results.length ; i++){
            if (results[i].chatId != null && results[i].chatId != "null"){
                value.push(results[i])
            }
        }
        res.send(value)
    })
})

router.post('/', (req, res) => {
    config.query(`INSERT INTO chat(employee, message) 
                    VALUES (${req.body.employee} , "${req.body.message}")`,
        (error, result) => {
            if (error) throw error;
            res.json('new message')
        })
})

router.delete('/:id', (req, res) => {
    config.query(`
                    DELETE FROM chat WHERE chatId = ${req.params.id}
                `,
    (error, result, fields) => {
        if(error) throw error;
        res.json(`delect : chartId ${req.params.id}`)
    })
})

module.exports = router