// Configurações iniciais
const express = require('express');
const exphbs = require("express-handlebars")
const bodyParser = require('body-parser')

const app = express()
const port = 8000

//Template engine
app.engine('handlebars', exphbs.engine({
  layoutsDir: __dirname + '/views/layouts',
  defaultLayout: 'main'
}))
app.set('view engine', 'handlebars')
app.use(express.static('public'))

const notesRoutes = require('./routes/notes')

// Rotas
app.get('/', function (req, res) {
  res.render('home');
})

app.use('/notes', notesRoutes)

app.listen(port, () => {
  console.log(`Projeto rodando na porta: ${port}`)
})