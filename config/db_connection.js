const MongoClient = require("mongodb");
const connectionURI = "mongodb://localhost:4444";

let _db;

module.exports = {
  connectToDB: (callback) => {
    MongoClient.connect(
      connectionURI,
      { useUnifiedTopology: true },
      (err, result) => {
        err ? null : (_db = result.db("express_starter"));
        return callback(err);
      }
    );
  },

  getDb: () => {
    return _db;
  },
};
