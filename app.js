const express = require('express')
const app = express()
const port = 8000

app.set('view engine', 'ejs')

app.get('/', (req, res) => res.render("index"))
app.get('/another', (req, res) => res.render("another"))

app.listen(port, () => console.log(`App running on port ${port}`))