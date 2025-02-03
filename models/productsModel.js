import mongoose from "mongoose";
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true, // Elimina espacios en blanco innecesarios
    },
    price: {
        type: Number,
        required: true,
        min: 0, 
    },
    category: {
        type: String,
        required: true,
    },
    stock: {
        type: Number,
        required: true,
        min: 0, 
        default: 0, 
    },
    description: {
        type: String,
        required: false, // No es obligatorio
        trim: true,
    }
},
{
    versionKey: false,
}
);

const Product = mongoose.model('Product', productSchema);

export { Product };
