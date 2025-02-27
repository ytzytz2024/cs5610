const {MongoClient} = require('mongodb');
// const uri = process.env.MongoDB_URL

const uri = "mongodb+srv://deyin12345:ruFSRYi6lRlWyoSq@cluster0.aylsz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri);
module.exports = {
    connect: async function() {
        // const client = new MongoClient(uri);

        await client.connect();
    },
    // addToDB accepts
   addToDB: async function(doc) {
    try {
        const result = await client.db("cs5610").collection("tasks").insertOne(doc);
        console.log(result);
    } catch (error) {
        console.log(error);
    }
   },
}