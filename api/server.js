const express = require("express")
const cors = require("cors")
const helmet = require("helmet")

const characterRouter = require("../characters/characterRouter")

const server = express()

server.use(express.json())
server.use(cors())
server.use(helmet())
server.use("/api/characters", characterRouter);

server.get("/", (req, res) => {
    res.status(200).json({api: "is up"})
})

module.exports = server