import { MongoClient } from "mongodb";
import 'dotenv/config';

const password = encodeURIComponent(process.env.MONGO_PASSWORD.trim());
const connectionString = `mongodb+srv://saurabnegi:${password}@cluster0.cyrpzgq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
const client = new MongoClient(connectionString);
let conn;
try {
  conn = await client.connect();
  console.log("DB connection successful")
} catch(e) {
  console.error(e);
}
let db = conn.db("integration_ninjas");
export default db; 