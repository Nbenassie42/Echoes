const { Client } = require('pg');

module.exports = async (req, res) => {
    const connectionString = 'postgresql://neondb_owner:ZqMQS1Y0UDHu@ep-snowy-bar-a2k4ht3y-pooler.eu-central-1.aws.neon.tech/neondb?sslmode=require';

    const client = new Client({
        connectionString,
    });

    try {
        console.log('Connecting to the database...');
        await client.connect();
        console.log('Connected to the database successfully!');
        res.status(200).send('Connected to the database successfully!');
    } catch (err) {
        console.error('Connection failed:', err.message);
        res.status(500).send('Connection failed: ' + err.messagxe);
    } finally {
        await client.end();
        console.log('Database connection closed.');
    }
};