import { MongoClient } from "mongodb";
import {
  getMongoConnection,
  insertOne,
  getCollections,
} from "../../../helpers/db-helper";

export default async function handler(req, res) {
  const event = req.query.eventId;

  let client;
  try {
    client = await getMongoConnection("events");
  } catch (error) {
     res.status(500).json({message: error.message});
     return;
  }

  if (req.method === "POST") {
    const email = req.body.email;
    const name = req.body.name;
    const text = req.body.text;
    //Create comment if everything exits
    const data = {
      eventId: event,
      email: email,
      name: name,
      text: text,
    };

    try {
      const result = await insertOne(client, "comments", data);
      data.id = result.insertedId;
    } catch (error) {
      return res.status(500).json({message:error});
    }
    
    return res.status(201).json({ message: "Comment added", comment: data });
  } else if (req.method === "GET") {
    //return all comments for a given event
    
    let results;
    try {
      results = await getCollections(client, 'comments', {eventId: event}, {_id: -1})
      //console.log(results);
    } catch (error) {
      return res.status(500).json(error)
    }
    
    return res.status(200).json(results);
  }
}
