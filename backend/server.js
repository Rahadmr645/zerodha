import express from 'express'
import dotenv from 'dotenv'
import connectToMongo from './config/db.js';

dotenv.config();

const PORT = process.env.port;

const app = express();

app.use(express.json());

connectToMongo();

app.use('/',(req,res) => {
    res.send('well come rahad');
});


app.listen(PORT, () =>{
    console.log(`app is running on http://localhost:${PORT}`)
});


