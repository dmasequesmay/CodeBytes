import {Client} from '@elastic/elasticsearch';
const client = new Client({ node: process.env.ELASTICSEARCH_URL });
module.exports = client;
