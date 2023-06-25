const express = require('express')
const userRouter = require('./src/routes/user.router');
require('./src/database/connection')
require('dotenv').config();

const PORT = 3000
const app = express()
app.use(express.json());

app.use('/user', userRouter)

app.listen(PORT, () => {
    console.log({ message: `Server started at : http://localhost:${PORT}` })
})