import express from 'express';
import mongoose from 'mongoose';

const app = express()

mongoose.connect('mongodb+srv://ed:KUfB7pXZqsREbN8D@cluster0.mgrjqam.mongodb.net/?retryWrites=true&w=majority')

    .then((data) => {
        console.log('MongoDB Connection Succeeded')
    })

    .catch((err) => {
        console.log('Error in Db connection',err.message)
    })



app.listen(3333)