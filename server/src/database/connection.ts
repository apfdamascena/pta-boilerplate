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
    url: process.env.NODE_ENV === 'production' ? process.env.DATABASE_URL : undefined, 
    entities: [
      process.env.NODE_ENV !== 'production' ?  './src/models/*' : './dist/models/*'
    ],
  }
)






