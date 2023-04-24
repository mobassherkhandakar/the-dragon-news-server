const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5000;
app.use(cors())
//! catagories data
const catagories = require('./data/catagories.json')

app.get('/', (req, res)=>{
  res.send('the dragon is runnig')
})

app.get('/catagories', (req,res)=>{
  res.send(catagories)
})

app.listen(port, ()=>{
  console.log(`Dragon API is running on ${port}`);
})