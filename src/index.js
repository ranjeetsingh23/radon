const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const jwt = require('jsonwebtoken');
const { default: mongoose } = require('mongoose');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://Functionup-cohort:VuU3BF85dJfPhnHa@cluster0.vgm0kds.mongodb.net/Auth-DB", {
    useNewUrlParser: true
})
    .then(() => console.log("MongoDb is connected"))
    .catch(err => console.log(err))


app.use('/', route)


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
