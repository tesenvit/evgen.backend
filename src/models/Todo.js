import mongoose from 'mongoose'

const TodoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    check: {
        type: Boolean,
        required: true
    },
    updatedAt: {
        type: String,
        required: true
    },
    createdAt: {
        type: String,
        required: true
    }
}, {
    versionKey: false
})

export default mongoose.model('Todo', TodoSchema)
