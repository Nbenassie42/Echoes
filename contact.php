<?php
$connectionString = 'postgresql://neondb_owner:ZqMQS1Y0UDHu@ep-snowy-bar-a2k4ht3y-pooler.eu-central-1.aws.neon.tech/neondb?sslmode=require';

$parsedUrl = parse_url($connectionString);

$host = $parsedUrl['host'];
$dbname = ltrim($parsedUrl['path'], '/');
$username = $parsedUrl['user'];
$password = $parsedUrl['pass'];
$sslmode = 'require';

try {
    $dsn = "pgsql:host=$host;dbname=$dbname;sslmode=$sslmode";
    $options = [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    ];

    $pdo = new PDO($dsn, $username, $password, $options);
    echo "Connected to the database successfully!";
} catch (PDOException $e) {
    echo "Connection failed: " . $e->getMessage();
}
?>