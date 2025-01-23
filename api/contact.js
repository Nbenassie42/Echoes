const { Client } = require('pg');

module.exports = async (req, res) => {
    const connectionString = 'postgresql://neondb_owner:ZqMQS1Y0UDHu@ep-snowy-bar-a2k4ht3y-pooler.eu-central-1.aws.neon.tech/neondb?sslmode=require';

    const client = new Client({
        connectionString,
    });

    const { name, email, hobby } = req.body;

    try {
        console.log('Connecting to the database...');
        await client.connect();
        console.log('Connected to the database successfully!');

        const insertQuery = `
            INSERT INTO "user" (name, email, hobby)
            VALUES ($1, $2, $3)
            RETURNING *;
        `;

        const values = [name, email, hobby];

        const result = await client.query(insertQuery, values);
        console.log('Data inserted successfully:', result.rows[0]);

        res.status(200).send('Data inserted successfully!');
    } catch (err) {
        console.error('Error inserting data:', err.message);
        res.status(500).send('Error inserting data: ' + err.message);
    } finally {
        await client.end();
        console.log('Database connection closed.');
    }
};