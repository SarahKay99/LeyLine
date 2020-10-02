/// <SUMMARY>
/// Repo for one of ~5 datatypes, Image.
/// ONLY SUPPORTS 2D/3D SHAPE ANNOTATIONS! 
/// IMAGE SEGMENTATION NOT SUPPORTED.
/// </SUMMARY>

const mongoose = require("mongoose");
const { schema } = require("../authSchemas");

// PRIVATE SCHEMAS: Children of Public Schemas
let coordinateSchema = new mongoose.Schema({
  x: {type: Number, required: true},
  y: {type: Number, required: true},
  z: {type: Number, required: false},
  ref1: {type: mongoose.Schema.Types.ObjectId, ref: 'coordinate', required: true},
  ref2: {type: mongoose.Schema.Types.ObjectId, ref: 'coordinate', required: false},
});

// annotationSchema = a list of coordinates bound to their schema.
let annotationSchema = new mongoose.Schema({
  imageID: { type: mongoose.Schema.Types.ObjectId, ref: 'image' },            // Foreign Key
  coords: [coordinateSchema]                                                  // X, Y, maybe Z. LinkedList
});
// Lines drawn between coordinates adjacent to each other.
// coords.count() gives the number of coordinates, num_points.

let imageSchema = new mongoose.Schema({
  img: { type: Buffer },
  address: { type: String, required: true },
  dimensions: { type: Boolean, required: true },                              // True if 2D, False if 3D
  categories: [{ type: mongoose.Schema.Types.ObjectId, ref: 'category' }],    // List of Foreign Keys
  datasets: [{ type: mongoose.Schema.Types.ObjectId, ref: 'dataset' }],       // List of Foreign keys
  annotations: [annotationSchema],
});

mongoose.model("coordinate", coordinateSchema)                                // For reference's sake
module.exports = mongoose.model("image", imageSchema)
