const express = require("express")
const cors = require("cors")
const listEndpoints = require("express-list-endpoints")
const mongoose = require("mongoose")
const usersRoute = require("./services/users")
const todoRoute = require("./services/todolist")

const server = express()
const port = process.env.PORT

server.use(express.json())

server.use("/users", usersRoute)
server.use("/todo", todoRoute)

console.log(listEndpoints(server))

mongoose.connect("mongodb://localhost:27017/todolistdb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(
    server.listen(port, () => {
        console.log(`Sever running on port:${port}`)
    })
).catch(err => console.log(err))
