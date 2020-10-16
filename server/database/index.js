const mysql = require('mysql')
const config = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'message'
})

// Create table 
// Employee Table
// config.query(`CREATE TABLE employee(
//                 employeeId INT NOT NULL AUTO_INCREMENT,
//                 firstName VARCHAR(255) NOT NULL,
//                 lastName VARCHAR(255) NOT NULL,
//                 email VARCHAR(255) NOT NULL,
//                 password VARCHAR(255) NOT NULL,
//                 image longtext NOT NULL,
//                 PRIMARY KEY (employeeId)
//             )`, (error, results, fields) => {
//     if (error) throw error;
//     console.log(results)
// })

// Chat Table
// config.query(`CREATE TABLE chat(
//                 chatId INT NOT NULL AUTO_INCREMENT,
//                 employee INT NOT NULL,
//                 message VARCHAR(255) NOT NULL,
//                 PRIMARY KEY (chatId),
//                 FOREIGN KEY (employee) REFERENCES employee(employeeId)
//             )`, (error, results, fields) => {
//                 if (error) throw error;
//                 console.log(results)
//             })

module.exports = config