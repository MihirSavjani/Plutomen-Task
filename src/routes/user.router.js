const express = require('express');
const userRouter = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user.model')
const authenticate = require('../middlewares/authenticate');

userRouter.post('/', async (req, res) => {
    try {
        // encrypt the password
        const password = await bcrypt.hash(req.body.password, 10);
        req.body.password = password;
        // create new user
        const newUser = await new User(req.body);
        // save the user
        await newUser.save();
        res.status(201).send(newUser);
    } catch (error) {
        res.status(400).send("Error occurred:" + error);
    }
})
userRouter.post('/login', async (req, res) => {
    // get email and password from request body
    const email = req.body.email;
    const password = req.body.password;

    // find user using email
    const user = await User.findOne({ email });

    if (user) {
        // validate if password is valid
        let comparison = await bcrypt.compare(password, user.password);

        if (comparison) {
            // if password is valid token is generated and saved in user profile
            const token = jwt.sign(email, process.env.SECRET_KEY);
            user.token = token;

            // save user profile
            await user.save();
            res.status(200).send({ message: "Logged in Successfully", token });
        } else {
            console.log({ message: "Invalid credentials" })
            res.send({ message: "Invalid credentials" });
        }
    } else {
        console.log({ message: "Invalid credentials" })
        res.send({ message: "Invalid credentials" });
    }
});

userRouter.get('/contact-list', authenticate, async (req, res) => {
    try {
        // get Bearer token from header and split the Bearer word
        const token = req?.headers?.authorization.split(' ')[1];

        // find user based on token
        const user = await User.findOne({ token });

        // extract department from it
        const userDepartment = user.department;

        // find user based on my department 
        const users = await User.find({ department: userDepartment }).sort({ name: 1 });
        res.status(200).send(users);
    } catch (error) {
        res.status(400).send("Error occurred while fetching contact list:" + error);
    }
})
userRouter.get('/contacts', async (req, res) => {
    try {
        // get available query params
        const { name, role, email } = req.query;

        // add all available query params in query object
        const query = {}
        if (name) {
            query.name = name;
        }
        if (email) {
            query.email = email;
        }
        if (role) {
            query.role = role;
        }

        // find users based on query object
        const users = await User.find(query);
        res.status(200).send(users)
    } catch (error) {
        res.status(400).send("Error occurred while fetching contacts:" + error);
    }
})
module.exports = userRouter;