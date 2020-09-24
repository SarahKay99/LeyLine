module.exports = (() => {
  const BugObject = require("./bugSchemas");
  const database = require("./database");

  database.GetDbInstance();
  
  async function _insertBugCollection(bugs) {
    await BugObject.insertMany(bugs);
  }

  async function _insertSingleBug(bug) {
    let bugModel = new BugObject(bug);
    return await bugModel.save();
  }

  async function _addTag(id, tag) {
    let bug = await _getBugByID(id);
    bug.tags.push(tag);
    bug.save();
  }

  async function _getAllBugs() {
    return await BugObject.find()
  }

  async function _deleteCollection() {
    return await BugObject.deleteMany();
  }

  async function _getBugByID(id) {
    return await BugObject.findById(id);
  }

  async function _updateBug(query) {
    return await BugObject.findByIdAndUpdate(query.id, {$set: query.updateObject}, {upsert: false, new: true}, null);
  }

  return {
    InsertBugCollection(bugs) {
      return _insertBugCollection(bugs);
    },
    InsertSingleBug(bug) {
      return _insertSingleBug(bug);
    },
    GetAllBugs() {
      return _getAllBugs();
    },
    DeleteCollection() {
      return _deleteCollection();
    },
    GetBugByID(id) {
      return _getBugByID(id);
    },
    UpdateBug(bug) {
      return _updateBug(bug);
    },
    AddTag(id, tag) {
      return _addTag(id, tag);
    }
  };
})();




