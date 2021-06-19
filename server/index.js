import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
    
import heartRoutes from './routes/hearts.js';
import diabetesRoutes from './routes/diabetes.js';
import strokeRoutes from './routes/stroke.js';
import creditRoutes from './routes/credit.js';
import loanRoutes from './routes/loan.js';
import insuranceRoutes from './routes/insurance.js';

const app = express();
dotenv.config();

app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

app.use('/heartposts', heartRoutes);
app.use('/diabetesposts', diabetesRoutes);
app.use('/strokeposts', strokeRoutes);
app.use('/creditposts', creditRoutes);
app.use('/loanposts', loanRoutes);
app.use('/insuranceposts', insuranceRoutes);



app.get('/', (req, res) => {
    res.send('Hello to My First WebApp');
});


const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
 .then(()=> app.listen(PORT, () => console.log(`Server Running on Port: ${PORT}`)))
 .catch((error)=> console.log(error.message));

 mongoose.set('useFindAndModify', false);
