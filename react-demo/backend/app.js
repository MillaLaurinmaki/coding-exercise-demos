const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 4000
const { getAllFruit, getAllVegetables } = require('./database')

app.use(cors())


app.get('/store/fruit', (req, res) => {
  res.json(getAllFruit())
})

app.get('/store/vegetables', (req, res) => {
  res.json(getAllVegetables())
})

app.get('/', (req, res) => {
  res.redirect('/store/fruit')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
