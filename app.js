var express = require('express'),
    bodyParser = require('body-parser'),
    app = express(),
    quoteRoutes = require('./routes/quote');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/app', quoteRoutes);

app.listen(8080);
