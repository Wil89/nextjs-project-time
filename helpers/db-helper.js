import { MongoClient } from "mongodb";

export async function getMongoConnection(table) {
  const mongoUrl = `mongodb+srv://Wlloa:TheJoker20507!@cluster0.ozw6w.mongodb.net/${table}?retryWrites=true&w=majority`;
  const client = await MongoClient.connect(mongoUrl);
  return client;
}

export async function insertOne(client, collection, data) {
  const db = client.db();
  const result = await db.collection(collection).insertOne(data);
  client.close();
  return result;
}

export async function getCollections(client, collection, filter, sort) {
  const db = client.db();
  const result = await db
    .collection(collection)
    .find(filter)
    .sort(sort)
    .toArray();

  client.close();
  return result;
}
