import mongoose from 'mongoose'

const ToDoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    }
})

export default mongoose.model('ToDo', ToDoSchema)
