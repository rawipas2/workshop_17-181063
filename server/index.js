const express = require('express')
const config = require('./database')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

const employee = require('./components/employee')
const chat = require('./components/chat')

config.connect( (err) => {
  if (err) throw err ;
  console.log('connected')
})

app.get('/', (req, res) => {
  res.send('Hello API Messegar!!')
})

app.use(cors())
app.use(express.json({limit: '50mb'}))
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use('/employee', employee)
app.use('/chat', chat)



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})