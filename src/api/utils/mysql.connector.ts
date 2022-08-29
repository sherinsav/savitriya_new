import mysql from 'mysql';

/**
 * generates pool connection to be used throughout the app
 */
export const pool = mysql.createPool({
    host                : process.env.MY_SQL_DB_HOST,
    port                : 3307,
    user                : 'root',
    password            : 'password',
    database            : 'savitriya',
    connectionLimit     : 10,
    multipleStatements  : true
})
