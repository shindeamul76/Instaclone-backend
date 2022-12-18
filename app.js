const express = require('express')
const app = express()
const connectDB = require('./database/connect')

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const postRoutes = require('./routes/post')
const cors = require('cors');
const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,          
    optionSuccessStatus: 200
}
app.use(cors(corsOptions));


app.use(express.urlencoded({extented: true}));
app.use(express.json());

app.set('views', './views');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('form.ejs');
})



app.use('/post', postRoutes);

app.use('/*', (req, res) => {
    res.status(404).send('Page Not Found');
})


const start = async () => {
    await connectDB(process.env.MONGO_URI)
    app.listen(process.env.PORT, () => console.log(`Server is on PORT ${process.env.PORT}`));
}

start()