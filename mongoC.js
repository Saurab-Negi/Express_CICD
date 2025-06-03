import { MongoClient } from "mongodb";
import 'dotenv/config';

const client = new MongoClient(process.env.MONGO_URL);
let conn;
try {
  conn = await client.connect();
  console.log("DB connection successful")
} catch(e) {
  console.error(e);
}
let db = conn.db("integration_ninjas");
export default db; 