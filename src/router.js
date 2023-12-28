import express from 'express'
import mongoose from 'mongoose'
import Todo from './models/Todo.js'
import checkId from './middlewares/checkId.js'

const router = express.Router()

router.get('/', (req, res) => {
    return res.json({
        hello: 'world'
    })
})

router.get('/api/todo', async (req, res) => {
    const todoList = await Todo.find().exec()

    return res.json({
        result: todoList
    })
})

router.get('/api/todo/:id', checkId, async (req, res) => {
    const {id} = req.params
    const todoItem = await Todo.findById(id).exec()
    if (!todoItem) {
        return res.status(404).json({
            error: 'Not found'
        })
    }

    return res.json({
        result: todoItem
    })
})

router.post('/api/todo', async (req, res) => {
    const {title} = req.body

    if (!title) {
        return res.status(400).json({
            error: 'Invalid title'
        })
    }

    const newTodoItem = new Todo({
        title,
        check: false,
        updatedAt: new Date().toISOString(),
        createdAt: new Date().toISOString()
    })

    await newTodoItem.save()

    return res.status(201).json({
        result: 'Success'
    })
})

router.put('/api/todo/:id', checkId, async (req, res) => {
    const {id} = req.params
    const todoItem = await Todo.findById(id).exec()
    if (!todoItem) {
        return res.status(404).json({
            error: 'Not found'
        })
    }

    const {title, check} = req.body
    if (!title || typeof title !== 'string' || typeof check !== 'boolean') {
        return res.status(400).json({
            error: 'Invalid title or check'
        })
    }

    const updateTodoItem = Object.assign(todoItem, {title, check})

    await Todo.updateOne({_id: id}, updateTodoItem)

    return res.status(200).json({
        result: updateTodoItem
    })
})

router.delete('/api/todo/:id', async (req, res) => {
    const {id} = req.params
    const todoItem = await Todo.findById(id).exec()
    if (!todoItem) {
        return res.status(404).json({
            error: 'Not found'
        })
    }

    await Todo.deleteOne({_id: id})

    return res.status(200).json({
        result: 'Success'
    })
})

export default router
