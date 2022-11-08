import express from "express"
import dotenv from 'dotenv'
import cors from 'cors'
import morgan from 'morgan'

dotenv.config()
const app = express()

app.use(morgan("tiny"))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

import { userModel, todoModel } from './model.js';

app.get('/users', async(req, res) => {
    const users = await userModel.find({});

    res.json(users);
});

app.get('/todos', async(req, res) => {
    const todos = await todoModel.find({});

    res.json(todos);
});


app.use((err, req, res, next) => {
    const status = err.status || 500
    const message = err.message || "Internal server error"
    const stack = process.env.NODE_ENV === "dev" ? err.stack : null

    res.status(status).json({
        message,
        stack
    })
})

const port = process.env.PORT || 4001

app.listen(port, () => {
    console.log(`app is running on port ${port}`)
})