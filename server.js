const cors = require('cors')
const express = require('express')
const axios = require('axios')
const app = express()

app.use(cors())

app.get('/', (req, res) => {
    try {
        // response é a resposta do axios
    const { data } = await axios('https://jsonplaceholder.typicode.com/users')
    console.log(data)

    return res.json([
        { name: 'Afonso'},
        { name: 'Kevin'}
    } catch (error) {
        console.error(error)
    }
})

app.listen('4567')