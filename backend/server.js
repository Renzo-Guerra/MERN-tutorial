const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv').config();
const {errorHandler} = require('./middleware/errorMiddleware.js');
const port = process.env.PORT;
const connectDB = require('./config/db.js');

connectDB();

const app = express();

app.use(express.json()); // Permite mostrar por consola un json
app.use(express.urlencoded({extended: false})); // En caso de que envien un formdata (creo)

app.use('/api/goals', require('./routes/goalRoutes.js'))

app.use(errorHandler);

app.listen(port, ()=>{
  console.log(`Server started on port ${port}`)
});
