module.exports = (() => {
    const UserObject = require("./authSchemas");
    const database = require("./database");
  
    database.GetDbInstance();
    
    async function _getUser(userQuery) {
      return await UserObject.findOne(userQuery);   
    }

    async function _deleteCollection() {
        await UserObject.deleteMany();
    }

    async function _insertUser(user) {
        let userModel = new UserObject(user);
        return await userModel.save()
      }
    
    return {
      GetUser(userQuery) {
        return _getUser(userQuery);
      },
      DeleteCollection() {
        return _deleteCollection();
      },
      InsertUser(user) {
        return _insertUser(user);
      }
    };
})();  
