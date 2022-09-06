import express from "express"
import data from "../data.js";
import Product from "../models/productModel.js"
import User  from "../models/userModel.js";

export const seedRouter = express.Router()

seedRouter.get('/', async (req, res) => {
    await Product.remove({});
    const createdProducts = await Product.insertMany(data.products);
    await Product.remove({});
    const createdUsers = await User.insertMany(data.users);
    res.send({ createdProducts, createdUsers });
})