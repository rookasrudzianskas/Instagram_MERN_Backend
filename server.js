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

const connection_url = 'mongodb+srv://admin:zkYomq80UtLWeh6Q@cluster0.oe0jw.mongodb.net/backend-instagram?retryWrites=true&w=majority';

mongoose.connect(connection_url, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

mongoose.connection.once('open', () => {
    console.log("DB is working on");
})


// api routes
app.get('/', (req, res) => res.status(200).send('backend is working on 🔥'));

app.post('/upload', (req, res) => {

});

// listener
app.listen(port, () => console.log(`listening on ${port}`));































//zkYomq80UtLWeh6Q