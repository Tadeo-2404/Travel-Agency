import express from "express";
import router from "./router/index.js";
import db from "./config/db.js";
import dotenv from 'dotenv/config';

try {
    await db.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
}

const app = express();
const port = process.env.PORT || 4000

app.use('/', router);
app.set('view engine', 'pug') 
app.use(express.static('public'))

app.listen(port, () => {
    console.log(`App funcionando puerto ${port}`)
})
