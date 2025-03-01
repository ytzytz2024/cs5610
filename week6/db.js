const { MongoClient, ObjectId} = require("mongodb");
require("dotenv").config();
const uri = process.env.MongoDB_URL;



const client = new MongoClient(uri);
module.exports = {
  connect: async function () {
    // const client = new MongoClient(uri);

    await client.connect();
  },
  // addToDB accepts
  addToDB: async function (doc) {
    try {
      const result = await client
        .db("cs5610")
        .collection("tasks")
        .insertOne(doc);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  },

  getAllTasks: async function () {
    try {
      const cursor = await client.db("cs5610").collection("tasks").find({});
      console.log("async");
      /*
        for await (const doc of cursor) {
          console.log(doc);
        }
          */

      const tasks = await cursor.toArray();
      return tasks;
    } catch (error) {
      console.log(error);
    }
  },
  findTaskById: async function (id) {
    try {
        const task = await client.db("cs5610").collection("tasks").findOne({ _id: new ObjectId(id) });
      return task;
    } catch (error) {
      console.log(error);
    }
  },


};
