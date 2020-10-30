const express = require('express')
const axios = require('axios')
const app = express()

const API_URL = 'https://my-json-server.typicode.com/andrecrts/info/personal'

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/info', async (req, res) => {
  try {
  const { data}  = await axios.get(API_URL)
  res.send(data)
  } catch(error) {
    res.status(500).send('Internal server error')
  }
})
 

module.exports = app
