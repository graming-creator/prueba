import mongoose, { mongo } from "mongoose";

process.loadEnvFile()

const URI_DB = process.env.URI_DB;
const URL = process.env.URL

const connectDB = async () => {
    try {
        await mongoose.connect(URL)
        console.log("Conexion exitosa con la base de datos!");
    } catch (error) {
        console.error(error)
    }
}

export { connectDB }