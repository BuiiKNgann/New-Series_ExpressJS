const express = require('express')
const app = express()
const port = 8080

app.get('/', (req, res) => {
    res.send('Hello World! với hỏi dân it')
})

app.get('/about', (req, res) => {
    res.send('Hello World! với Ngan')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})