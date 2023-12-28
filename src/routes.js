import express from 'express'
import ToDoSchema from './models/ToDo.js';

const router = express.Router()

router.get('/', (req, res) => {
    return res.json({
        hello: 'world'
    })
})

router.get('/api/todo', async (req, res) => {
    const todoList = await ToDoSchema.find().exec()

    return res.json({
        result: todoList
    })
})

export default router
