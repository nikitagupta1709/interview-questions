const express = require('express')
const data = require('./data');
const rateLimit = require('express-rate-limit')

const app = express();

const limiter = rateLimit({
    max: 10,
    windowMs: 10000
})

app.get('/data', limiter, (req, res) => {
    res.send({
        status: "success",
        data: data
    })
})

app.listen(5000, ()=>{
    console.log("Server listening on port 5000")
})