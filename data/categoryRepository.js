const { Mongoose } = require("mongoose");

module.exports = (() => {
  const CategoryObject = require("./categorySchemas");            // Equivalent of a table in SQL, called Documents.
  const database = require("./database");
  database.GetDbInstance();
  
  async function _insertCategoryCollection(categories) {
    await CategoryObject.insertMany(categories);
  }

  async function _getCategoryByID(id) {
    return await CategoryObject.findById(id);
  }

  async function _deleteCollection() {
    return await CategoryObject.deleteMany();
  }

  async function _updateDataset(query) {
    return await CategoryObject.findByIdAndUpdate(query.id, {$set: query.updateObject}, {upsert: false, new: true}, null);
  }

  async function _getAllCategories() {
    return await CategoryObject.find()
  }

  return {
    InsertCategoryCollection(categories) {
      return _insertCategoryCollection(categories);
    },

    GetCategoryByID(id) {
      return _getCategoryByID(id);
    },

    DeleteCollection() {
      return _deleteCollection();
    },

    UpdateDataset(query) {
      return _updateDataset(query);
    },

    GetAllCategories() {
      return _getAllCategories(); 
    }
  };
})(); 