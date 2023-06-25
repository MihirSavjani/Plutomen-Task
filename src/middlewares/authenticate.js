
const mongoose = require('mongoose');
const jwt = require("jsonwebtoken");
require('dotenv').config();

let authenticate = async (req, res, next) => {
    //need to implement find by token 
    try {
        const token = req?.headers?.authorization.split(' ')[1];
        const verifyUser = jwt.verify(token, process.env.SECRET_KEY);
        if (verifyUser)
            next();
    } catch (error) {
        res.send({ message: "Invalid Token. Please Login.", error: error });
    }
};
module.exports = authenticate;
