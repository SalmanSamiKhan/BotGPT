import mongoose from 'mongoose'

const connectDB = async ()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log('Connected to mongoDB Atlas')
    } catch (error) {
        console.log(`MongoDB error: ${error}`)
    }
}

export default connectDB