const express = require('express')
const app = express()
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

// Method Get: Tương tác với thanh địa chỉ

// 1: Truyền theo query
// app.get("/search", (req, res) => {
//     let {id, address} = req.query
//     console.log(id, address)
// })

// 2: Truyền theo params
// app.get("/page/:index/:a", (req, res) => {
//     let { index, a } = req.params
//     console.log(index, a)
// })

// Method Post: Dữ liệu khi gửi lên sẽ bảo mật hơn
// app.post("/login", (req, res) => {
//     let { email, password } = req.body
//     console.log(email, password)
// })

app.listen(3000)