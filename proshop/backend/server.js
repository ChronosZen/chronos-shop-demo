import express from 'express';
import dotenv from 'dotenv';
import productRoutes from './routes/productRoutes.js'
import { notFound, errorHandler} from './middleware/errorMiddleware.js'
dotenv.config();
import connectDB from './config/db.js';
const port = process.env.PORT || 5000;
connectDB(); //Connect to MongoDB
const app = express();
app.get('/', (req, res, next) =>{
    res.send('API is running')
});

app.use('/api/products', productRoutes);

app.use(notFound);
app.use(errorHandler);
app.listen(port, ()=>{ console.log(`Server is running on port:${port}`)})