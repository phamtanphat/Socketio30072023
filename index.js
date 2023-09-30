const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

app.get("/", (req, res) => {
    res.sendFile(`${__dirname}/index.html`)
})

io.on('connection', (socket) => {
    console.log(`New user connect ${socket.id}`)
})

server.listen(3000, () => {
    console.log("Socket.io server running at http://localhost:3000/")
})

// var bodyParser = require("body-parser");
// app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

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