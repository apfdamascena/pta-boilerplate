import './database/connection.ts';
import routes from './routes.ts'
import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';

const application = express();
application.use(cors());
application.use(express.json());
application.use(routes);

application.listen(3001, () => {
    console.log('📦 Server running');
});