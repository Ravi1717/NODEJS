const MongoClient = require("mongodb").MongoClient;
const assert = require("assert");
const url = "mongodb://localhost:27017/";
const dbname = "conFusion";

const dboper = require("./operations");

MongoClient.connect(url).then(client => {
  console.log("Connected correctly to server");

  const db = client.db(dbname);
  const collection = db.collection("dishes");
  collection.insertOne(
    { name: "Uthappizza", description: "test" },
    (err, result) => {
      assert.equal(err, null);
      console.log("After Insert:\n");
      console.log(result.ops);
      collection.find({}).toArray((err, docs) => {
        assert.equal(err, null);
        console.log("Found:\n");
        console.log(docs);
        db.dropCollection("dishes", (err, result) => {
          assert.equal(err, null);
          client.close();
        });
      });
    }
  );
  dboper
    .insertDocument(db, { name: "Ravi Verma", description: "test" }, "dishes")
    .then(result => {
      console.log("Insert Document:\n", result.ops);
      return dboper.findDocuments(db, "dishes");
    })
    .then(docs => {
      console.log("found Documents:\n", docs);
    });
});
