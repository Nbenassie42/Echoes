const { Client } = require('pg');

module.exports = async (req, res) => {
    const connectionString = 'postgresql://neondb_owner:ZqMQS1Y0UDHu@ep-snowy-bar-a2k4ht3y-pooler.eu-central-1.aws.neon.tech/neondb?sslmode=require';

    const client = new Client({
        connectionString,
    });

    try {
        await client.connect();
        res.status(200).send('Connected to the database successfully!');
    } catch (err) {
        res.status(500).send('Connection failed: ' + err.message);
    } finally {
        await client.end();
    }
};