const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');

const app = express();

const corsOptions = {
    origin: process.env.FRONTEND_URL
};
require('dotenv').config();


//middlewares
app.disable('x-powered-by');
app.use(morgan('dev'));
app.use(express.json());
app.use(cors(corsOptions));

//db connection
mongoose.connect(process.env.DATABASE).then(() => { console.log('DB connected') }).catch(err => { console.log(err) });

//setup routes
app.use('/api/coders', require('./routes/coder'));
app.use('/api/skills', require('./routes/skill'));
app.use('/api/projects', require('./routes/project'));

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});