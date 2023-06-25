const mongoose = require('mongoose');
const uri = 'mongodb://127.0.0.1:27017/task';

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(async () => {
    console.log({ message: "Connected to MongoDB" });
}).catch((err) => {
    console.log({ message: 'Failed to connect to MongoDB:', error: err });
});