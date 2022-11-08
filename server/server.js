const path = require('path')
const express = require('express')

const app = express()
const port = 8080

const publicPath = path.join(__dirname, '..', 'public')

app.use(express.static(publicPath))

app.get('/*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'))
})

app.listen(port, () => {
    console.log(`the server is running at http://localhost:${port}`)
})
