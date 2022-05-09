import { DataSource } from 'typeorm';
import dotenv from 'dotenv'

dotenv.config();

export const connection = new DataSource(
  {
    name: 'default',
    type: "postgres",
    host: process.env.DATABASE_HOST,
    port: Number(process.env.DATABASE_PORT),
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_DB,
    synchronize: true,
    entities: ['src/models/*.ts'],
  }
)

connection.initialize().then( async () => {
  console.log('📦 Successfully connected with database');
}).catch((error) => {
  console.log('Error connecting to database', error);
})

