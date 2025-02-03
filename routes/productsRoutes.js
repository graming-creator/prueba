import { Router } from "express";
import {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,
} from "../controllers/productsControllers.js"

const productsRouter = Router();

productsRouter.get("/", getAllProducts);

productsRouter.get("/:id", getProductById);

productsRouter.post("/", createProduct);

productsRouter.patch("/:id", updateProduct);

productsRouter.delete("/:id", deleteProduct)

export { productsRouter };