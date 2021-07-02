const express = require('express');
require('dotenv').config();

const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

mongoose.connect(
    process.env.mongoURI,
    {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }
)
.then(res => console.log(`Connection Successful ${res}`))
.catch(err => console.log(`Error connecting to DB ${err}`));

app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json);

app.get("/", (req, res) => {
    res.send('<h1>Hello World</h1>');
});

app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
});
