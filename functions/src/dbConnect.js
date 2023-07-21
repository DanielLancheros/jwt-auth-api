import { MongoClient } from "mongodb";
import { MongoURI } from "./creds.js";

const connection = new MongoClient(MongoURI)

await connection.connect()

export const db = connection.db('Cluster0')

