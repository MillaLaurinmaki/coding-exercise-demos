const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 4000
const { getAllFruit, getAllVegetables, addVegetables } = require('./database')

app.use(cors())
app.use(express.json())


app.get('/store/fruit', (req, res) => {
  res.json(getAllFruit())
})

app.get('/store/vegetables', (req, res) => {
  res.json(getAllVegetables())
})

app.get('/', (req, res) => {
  res.redirect('/store/fruit')
})

app.post('/store/vegetables', (req, res) => {
  console.log('req.body', req.body);
  addVegetables(req.body)
  res.sendStatus(200);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
