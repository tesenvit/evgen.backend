import mongoose from 'mongoose'

export default function (req, res, next) {
    const {id} = req.params
    if (mongoose.Types.ObjectId.isValid(id)) {
        next()
    } else {
        return res.status(400).json({
            error: 'Invalid ID format'
        })
    }
}
