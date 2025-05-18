import mongoose from "mongoose";

// FUNCTION TO CONNECT MONGODB DATABASE
const connectDB = async () => {
    mongoose.connection.on('connected',() => console.log('DATABASE CONNECTED'))
    await mongoose.connect(`${process.env.MONGODB_URI}/job-portal`)
}

export default connectDB