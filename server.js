const express = require('express')
const cors = require('cors')
const morgan = require('morgan')

const routes = require('./src/routes')

const app = express()

app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

app.get('/', (req, res) => {
  res.send({ success: 'Hello, World!' })
})

app.use('/api', routes)

app.use((err, req, res, next) => {
  res.status(err.status || 500)
  res.send({
    status: err.status || 500,
    message: err.message,
  })
})

const port = process.env.PORT
app.listen(port, () => {
  console.log(`Listening on port ${port}...`)
})
