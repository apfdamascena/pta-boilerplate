import { connection } from './database/connection';
import routes from './routes'
import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';


connection.initialize().then(() => {
    console.log('📦 Successfully connected with database');
}).catch((error) => {
    console.log(error)
})

const application = express();
application.use(cors());
application.use(express.json());
application.use(routes);

application.listen(process.env.PORT || 3001, () => {
    console.log('📦 Server running');
});