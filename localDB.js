const express = require('express');
const cors = require('cors');
const { MongoClient, ObjectId } = require('mongodb');

const app = express();
const port = 3000;

const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);

app.use(cors()); // Enable CORS for all routes

async function main() {
    try {
        await client.connect();
        console.log("Connected to MongoDB");

        // General endpoint
        app.get('/maindb/data', async (req, res) => {
            const database = client.db('mydb');
            const collection = database.collection('maindb');

            const query = {};
            const documents = await collection.find(query).toArray();

            res.json(documents);
        });

        // Endpoint for getting specific data by ID
        app.get('/maindb/data/:id', async (req, res) => {
            const database = client.db('mydb');
            const collection = database.collection('maindb');

            const id = req.params.id;
            const query = { _id: new ObjectId(id) };
            const document = await collection.findOne(query);

            res.json(document);
        });

        app.listen(port, () => {
            console.log(`Server is running on http://localhost:${port}`);
        });

    } catch (e) {
        console.error(e);
    }
}

main().catch(console.error);
