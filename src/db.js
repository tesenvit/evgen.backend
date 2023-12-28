import mongoose from 'mongoose'
import 'dotenv/config'

try {
    await mongoose.connect(process.env.MONGO_URI)
    console.log('Connected to MongoDB')
} catch (e) {
    console.error('Error connecting to MongoDB:', e)
    process.exit(1)
}
