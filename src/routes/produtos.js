//Criando nossas routes no arquivo produtos.js
const express = require('express')

//feature de roteamento do Express, o Express Router (manipuladores de rota modulares e montáveis)
const router = express.Router()

const path = require('path')

// Método de roteamento / Manipuladores de rota
router.get('/', (req, res, next) => {
    //Enviando arquivo HTML como resposta à requisição
    res.sendFile(path.join(__dirname, '../', 'views', 'produtos', 'produtos.html'))
})

// router.get('/add_produto', (req, res, next) => {
//     res.sendFile(path.join(__dirname, '../', 'views', 'produtos', 'add_produto.html'))
// })

module.exports = router