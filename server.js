// import stuff here

import express from "express";
import cors from "cors";
import Pusher from "pusher";
import mongoose from "mongoose";


// app config
const app = express();
const port = process.env.PORT || 9002;

// middlewares
app.use(express.json());
app.use(cors());

// db config

const conn = 'mongodb+srv://admin:zkYomq80UtLWeh6Q@cluster0.oe0jw.mongodb.net/backend-instagram?retryWrites=true&w=majority'


// api routes
app.get('/', (req, res) => res.status(200).send('backend is working on 🔥'));

// listener
app.listen(port, () => console.log(`listening on ${port}`));































//zkYomq80UtLWeh6Q