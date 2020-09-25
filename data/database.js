/// <summary>
/// This file initiates the Mongoose database.
/// </summary>
const database = (function () {
  const mongoose = require("mongoose");
  let dbInstance = null;

  let _getDbInstance = function() {
    let connectionString = process.env.CONNECTION || "mongodb://localhost:30000/bugDB";
    console.log(`Database Connection: ${connectionString}`);

    if (!dbInstance) {
      console.log("Creating New MongoDB Instance");
      mongoose.connect(connectionString, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        })
        .then(() => {
          console.log("connected");
        })
        .catch((err) => {
          console.error("(./data/database.js) Connection failed: " + err);
        });
      return dbInstance = mongoose;
    }
    else{
        console.log("MongoDB Instance Already Exists");
        return dbInstance;
    }
  };

  return {
    GetDbInstance() {
      return _getDbInstance();
    },
  };
})();

module.exports = database;
