import { MongoClient } from "mongodb";
import {
  getCollections,
  insertOne,
  getMongoConnection,
} from "../../helpers/db-helper";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const email = req.body.email;
    const re =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if (!email || !re.test(email)) {
      return res.status(422).json({ message: "Bad Request, malformed email" });
    }
    const client = await getMongoConnection("subscriptions");
    insertOne(client, "emails", { email: email });
    return res.status(201).json({ user: { email: email } });
  }
}
