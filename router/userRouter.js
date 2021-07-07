const userRouter = require("express").Router()
const userMD = require("../models/userModel")

userRouter.get("/", (req, res) => {
    userMD.getAll()
    .then(response => {
        res.json(response)
    })
    .catch(err => {
        res.status(500).end()
    })
})

userRouter.post("/", (req, res) => {
    const user = req.body
    userMD.add(user)
    .then(response => {
        res.status(201).json(response)
    })
    .catch(err => {
        res.status(500).end()
    })
})

userRouter.delete("/:id", (req, res) => {
    const {id} = req.params
    userMD.remove(id)
    .then(response => {
        res.json(response)
    })
    .catch(err => {
        res.status(500).end()
    })
})

module.exports = userRouter