const express = require('express')
const app = express()
const hbs = require('hbs')

require('./hbs/helpers.js')

const port = process.env.PORT || 3000

app.disable('x-powered-by')

app.use(express.static(__dirname + '/public'))

hbs.registerPartials(__dirname + '/views/parciales')

app.set('view engine', 'hbs')

app.get('/', (req, res) => {
  res.render('home', {
    nombre: 'John'
  })
})

app.get('/about', (req, res) => {
  res.render('about')
})

app.listen(port, () => {
  console.log(`Webserver running on port ${port}`)
})
