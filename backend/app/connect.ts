/**
 *
 * this package is a drive for connecting postgresql
 */

import pg from "pg";

/**
 *
 *  pool is place where we keep idle connections
 *
 *  idle : connection is not in use, authenticated waiting for to be used ,
 *
 *  with pool you dont have to do handshake in every database query.
 *
 * you do once and use it.
 *
 * ref : https://node-postgres.com/features/pooling
 */

const pool = new pg.Pool({
    user: 'postgres',
    host: 'db',
    port: 5432,
    password: 'postgres',
    database: 'app_db'
});

export default pool;
