const express = require('express')
const app = express()

// Tương tác với thanh địa chỉ
// Có 2 cách:
// 1: Truyền theo query

app.get("/search", (req, res) => {
    console.log(req.query)
})

app.listen(3000)