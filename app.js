const app = require('express')()
const PORT = process.env.PORT || 8000
const routes = require('./routes')

app.set('view engine', 'ejs')

app.use('/', routes)

app.listen(PORT, () => console.log(`App running on port ${PORT}`))