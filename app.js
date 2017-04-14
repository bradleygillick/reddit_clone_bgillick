const express = require('express')
const linkQuery = require('./db/link-query')
const app = express()
const port = 3000


app.set('view engine', 'hbs')

app.get('/', (req, res) => {
    linkQuery.getAll()
        .then(data => {
            res.render('index', {
                data
            })
        })
})

app.get('/form', (req, res) => {

    res.render('form')
})

app.listen(port, () => {
    console.log(`listening on ${port}`)
})