//const express = require('express')
import express from 'express';
import configViewEngine from './config/viewEngine';
require('dotenv').config();
import initWebRoute from './route/web';
import initAPIRoute from './route/api';
//import connection from "./config/connectDB";

var morgan = require('morgan')


const app = express()
const port = process.env.PORT || 8888;


app.use((req, res, next) => {
    //check => return res.send()
    console.log('run into my middleware');
    console.log(req.method);
    next();

})
app.use(morgan('combined'))

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// set up view engine
configViewEngine(app);

//init web route
initWebRoute(app);

//init api route
initAPIRoute(app);

//handle 404 not found
app.use((req, res) => {
    return res.render('404.ejs')
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})


// hỗ trợ gửi data lên phía client và có thể lấy được data một cách đơn giản  