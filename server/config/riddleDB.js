// mongoDB connection for riddles database
import { MongoClient } from "mongodb";

// get the uri string from .env
const uri = process.env.MONGODB_URI

// create mongodb MongoClient
const client = new MongoClient(uri);

const dbName = "riddles_db";

let db;
export async function connectDB() {
    // connect to the riddles database if not connected
    if (!db){
        await client.connect();
        db = client.db(dbName);
        console.log(`Connected to MongoDB. Database name: ${dbName}`);
    }
    return db;
}
db = await connectDB();

export default db;