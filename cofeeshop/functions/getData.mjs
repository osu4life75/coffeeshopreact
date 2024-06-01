import dotenv from 'dotenv';
import mysql from 'mysql2/promise';

dotenv.config();

export async function handler(event, context) {
    console.log('gn2 getData function')
    try {
        // Create a MySQL connection pool
        const pool = mysql.createPool({
            host: process.env.REACT_APP_DB_HOST,
            user: process.env.REACT_APP_DB_USER,
            password: process.env.REACT_APP_DB_PASSWORD,
            database: process.env.REACT_APP_DB,
            port: process.env.REACT_APP_DB_PORT
        });

        // Query to fetch data
        const menuItemQuery = 'SELECT * FROM menuItems';
        
        const merchItemQuery = 'SELECT * FROM merchItems';
        
        // Execute the query using the pool
        const menuItemReturn = await pool.query(menuItemQuery);
        console.log('menuItemReturn' ,menuItemReturn[0]);
        const merchItemReturn = await pool.query(merchItemQuery);
        console.log('merchItemReturn', merchItemReturn[0]);

        // Release the connection
        pool.end();

        return {
            statusCode: 200,
            body: JSON.stringify({
                menuItems: menuItemReturn[0],
                merchItems: merchItemReturn[0]
            })
        };
    } catch (error) {
        console.error('Error fetching data:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Internal Server Error' })
        };
    }
}