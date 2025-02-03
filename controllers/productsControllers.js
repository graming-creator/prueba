import { Product } from "../models/productsModel.js"

const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products)
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Un error ha ocurrido con la lsita de productos",
            error: error.message,
        })
    }
}

const getProductById = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findById(id);

        if(!product) {
            return res.status(404).json({message:"Producto no encontrado."});
        }

        res.json(product);
    } catch (error) {
        console.error(error)
        res.status(500).json({
            message: "Un error ha ocurrido en la lista de producto",
            error: error.message,
        });
    }
};

const createProduct = async (req, res) => {
    try {
        const { body } = req;

        // Validacion de los datos antes de guardar
        if (!body.name || !body.price || !body.category || !body.stock || !body.description) {
            return res.status(400).json({message: "Todos los campos son obligatorios"})
        }
        
        const newProduct = new Product(body);
        await newProduct.save();

        res.status(201).json({
            message: "Producto creado con exito",
        })

    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Un error ha ocurrido con la lista de producto",
            error: error.message,
        })
    }
};

const updateProduct = async (req, res) => {
    try {
        const  { id } = req.params;
        const { body } = req;

        const product = await Product.findById(id);
        if(!product) {
            return res.status(400).json({
                message: "Producto no encontrado"
            })
        }

        Object.assign(product, body);
        await product.save();

        res.status(200).json({
            message: "Producto actualizado con exito!",product,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Un erorr ha ocurrido al actualizar el producto.",
            error: error.message,
        })
    }
};

const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;

        const product = await Product.findById(id);
        if (!product) {
            return res.status(400).json({
                message: "Producto no encontrado!"
            });
        }

        const deletedProduct = await Product.findByIdAndDelete(id);
        
        res.status(200).json({
            message: "Producto eliminado con exito!",
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Ha ocurrido un error al eliminar el producto.",
            error: message,
        })
    }
};
export {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,
}