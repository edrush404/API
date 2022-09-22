import express from 'express';
import mongoose from 'mongoose';
import router from './routes';

const app = express();

    app.use(express.json());
    app.use(router);

    mongoose.connect('mongodb+srv://ed:KUfB7pXZqsREbN8D@404.5x3dejk.mongodb.net/?retryWrites=true&w=majority')

    .then((data) => {
        console.log('MongoDB Connection Succeeded')
    })

    .catch((err) => {
        console.log('Error in Db connection', err.message)
    });



app.listen(80)