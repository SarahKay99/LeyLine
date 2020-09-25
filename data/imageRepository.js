/// <summary>
/// Functions for the controller
/// </summary>
const { Mongoose } = require("mongoose");

module.exports = (() => {
  // ImageObject is the equivalent of a table in SQL, called Documents.
  const ImageObject = require("./imageSchemas");
  const database = require("./database");
  
  database.GetDbInstance();

  // CREATE MANY IMAGES AT ONCE
  async function _insertImageCollection(images) {
    await ImageObject.insertMany(images);
  }

  // CREATE SINGLE IMAGE
  async function _insertSingleImage(image) {
    let imageModel = new ImageObject(image);
    return await imageModel.save();
  }

  // GET IMAGE
  async function _getImageByID(id) {
    return await ImageObject.findById(id);
  }

  // ADDING AN EMBEDDED OBJECT
  async function _addAnnotation(id, annotation) {
    let image = await _getImageByID(id);
    image.annotations.push(annotation);
    image.save();
  }

  // .populate() fills in ImageSchema's list.
  async function _getAll() {
    return await ImageObject.find().populate("category").populate("datasets")
  }

  // .populate() Deep Populate
  async function _getAnnotations() {
    return await ImageObject.find().populate({
      path: 'annotations',
      populate: {
        path: 'coords'
      }
    }).exec(function (err, res) {
      console.log("Annotation and Coordinate have been populated!")
    });
  }

  // DELETE ALL OBJECTS
  async function _deleteCollection() {
    return await ImageObject.deleteMany();
  }

  async function _updateImage(query) {
    return await ImageObject.findByIdAndUpdate(query.id, {$set: query.updateObject}, {upsert: false, new: true}, null);
  }

  return {
    InsertImageCollection(images) {
      return _insertImageCollection(images);
    },

    InsertSingleImage(image) {
      return _insertSingleImage(image);
    },

    GetImageByID(id) {
      return _getImageByID(id);
    },

    AddAnnotation(id, annotation) {
      return _addAnnotation(id, annotation);
    },

    GetAll() {
      return _getAll();
    },

    GetAnnotations() {
      return _getAnnotations();
    },

    DeleteCollection() {
      return _deleteCollection();
    },

    UpdateImage(image) {
      return _updateImage(image);
    }
  };
})();