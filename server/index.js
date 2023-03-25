const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv').config();
const sequelize = require('./utils/database');
const cors = require('cors');
const sellerRoutes = require('./routes/sellerRoutes');

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const port = process.env.PORT;

app.listen(port, () => {
    console.log(`Server is Successfully running on PORT http://localhost:${port}`);
})

// Database Connection

const database = async () => {
    try {
        await sequelize.sync();
        console.log('Database Connected Successfully..!');
    } catch (error) {
        console.log('Error while Connecting Database : ',error);
    }
}

database();

// Routes
app.use('/', sellerRoutes);