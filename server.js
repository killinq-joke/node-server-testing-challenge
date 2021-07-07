const express = require("express")
const cors = require("cors")
const helmet = require("helmet")
const userRouter = require("./router/userRouter")

const server = express()

server.use(express.json())
server.use(cors())
server.use(helmet())
server.use("/api/users", userRouter)

server.get("/", (req, res) => {
    res.json({ api: "up" })
})


module.exports = server