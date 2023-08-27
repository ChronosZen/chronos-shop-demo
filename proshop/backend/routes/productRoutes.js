import express from "express";
import asyncHanlder from "../middleware/asyncHandler.js";
import Product from '../models/productModel.js'
const router = express.Router();


router.get('/', asyncHanlder(async (req, res, next) =>{
    const products = await Product.find({});
    res.json(products);
}));
router.get('/:id', asyncHanlder( async(req, res, next)=>{
    const product = await Product.findById(req.params.id);
    if (product){
        return res.json(product);
    }
    res.status(404).json({message: "Product Not Found!"})
}))







export default router