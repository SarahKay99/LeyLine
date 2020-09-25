const { Mongoose } = require("mongoose");

module.exports = (() => {
  const DatasetObject = require("./datasetSchemas");    // Equivalent of a table in SQL, called Documents.
  const database = require("./database");
  
  database.GetDbInstance();

  async function _insertDatasetCollection(datasets) {
    await DatasetObject.insertMany(datasets);
  }

  async function _insertSingleDataset(dataset) {
    let datasetModel = new DatasetObject(dataset);
    return await datasetModel.save();
  }

  // Populate fills in ImageSchema's list.
  async function _getUsers() {
    return await DatasetObject.find().populate("users")
  }

  // Use for testing only
  async function _deleteCollection() {
    return await DatasetObject.deleteMany();
  }

  async function _getDatasetByID(id) {
    return await DatasetObject.findById(id);
  }

  async function _updateDataset(query) {
    return await DatasetObject.findByIdAndUpdate(query.id, {$set: query.updateObject}, {upsert: false, new: true}, null);
  }

  async function _getAllDatasets() {
    return await DatasetObject.find();
  }

  return {
    InsertDatasetCollection(datasets) {
      return _insertDatasetCollection(datasets);
    },

    InsertSingleDataset(dataset) {
      return _insertSingleDataset(dataset);
    },

    GetUsers() {
      return _getUsers();
    },

    DeleteCollection() {
      return _deleteCollection();
    },

    GetDatasetByID(id) {
      return _getDatasetByID(id);
    },

    UpdateDataset(query) {
      return _updateDataset(query);
    },

    GetAllDatasets() {
      return _getAllDatasets()
    }
  };
})();