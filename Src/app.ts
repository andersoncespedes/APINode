import express from "express";
import { Request, Response } from 'express';
import helmet from "helmet";
import Route from "./Routes/IndexRoute";
import { NextFunction } from "connect";
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const morgan = require('morgan');

if (!process.env.PORT) {
    console.log(`No port value specified...`);
}
const port = 8080;
const app = express();

app.use(cookieParser());

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));

app.use(morgan('dev'));

app.use("/", Route);
app.use((req : Request, res : Response, next : NextFunction) : void => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // update to match the domain you will make the request from
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
  });
app.use(helmet());
export {app};