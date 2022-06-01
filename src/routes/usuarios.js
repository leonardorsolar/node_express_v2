//Criando nossas routes no arquivo usuarios.js
const path = require('path')

const express = require('express')

const router = express.Router()

router.get('/usuarios', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'usuarios', 'usuarios.html'))
})

module.exports = router