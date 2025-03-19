const express = require('express');
const productRouter = express.Router();

const ProductModel = require('../models/productModel');
const productImages = require('../middleware/multer');
productRouter.post("/addproduct",async (req, res) => {
    productImages.array("images", 6)(req, res, async (err) => {
        if(err){
            return res.status(500).send({ msg: err.message });
        }
    })
    try {
        const { title, description, price, images } = req.body;
        if (!title || !description || !price || !images) {
            return res.status(404).send({ msg: "Please fill all the fields" });
        }
    } catch (error) {
        res.status(500).send({ msg: "Something went wrong" });
    }
})