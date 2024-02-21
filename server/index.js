const express = require('express')
const morgan = require('morgan')
require('dotenv').config()
const tablesRoute = require('./routes/tables')

const app = express()
const SERVERPORT = process.env.SERVERPORT

//middlewares
app.use(express.json())
app.use(morgan('tiny'))

//routes
app.get('/test', (req, res) => {
    res.json({
        success: true,
        message: 'Test Successful'
    })
})

app.use('/api/v1/tables', tablesRoute)

app.listen(SERVERPORT, () => {
    console.log(`Server listening at port ${SERVERPORT}`)
})