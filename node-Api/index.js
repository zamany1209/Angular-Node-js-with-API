const express = require('express')
const app = express()
const port = 3000

app.get('/getdata', (req, res) => {
    res.json({
        "StatusCode":200,
        "StatusMassage":"Hello"
    })
});
app.listen(port, (req, res) =>{
    console.log("express this is run at port 3000")
})