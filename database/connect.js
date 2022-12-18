const mongoose = require('mongoose')



const connectDB = (url) => {
    mongoose.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })    
}
mongoose.set('strictQuery', false);

module.exports = connectDB