const database = (function () {
  const mongoose = require("mongoose");
  let dbInstance = null;

  let _getDbInstance = function() {
    let connectionString = process.env.CONNECTION || "mongodb://localhost:30000/bugDB";
    console.log(`Database Connection: ${connectionString}`);

    if (!dbInstance) {
        //console.log("Creating New Instance");
      mongoose.connect(connectionString, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        })
        .then(() => {
          //console.log("connected");
        })
        .catch((err) => {
          //console.error("connection failed" + err);
        });
      return dbInstance = mongoose;
    }
    else{
        //console.log("Instance Already Exists");
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
