import { Client } from '@elastic/elasticsearch';
import dotenv from 'dotenv';
dotenv.config();
const client = new Client({
  node: process.env.ELASTICSEARCH_URL,
  auth: {
    username: process.env.ELASTICSEARCH_USERNAME as string,
    password: process.env.ELASTICSEARCH_PASSWORD as string
  }
});

export default client;