const mongoose = require("mongoose");
const { schema } = require("./authSchemas");

// LEYLINE DATA
let categorySchema = new mongoose.Schema({
  name: { type: String, required: true },
});

// AnnotationSchema2D: stores 2D annotations.
let annotationSchema2D = new mongoose.Schema({
  imageID: { type: mongoose.Schema.Types.ObjectId, ref: "image" },   // Foreign Key
  num_points: { type: Number, required: true },  
  polygonal: { type: Boolean, required: true },
  coordinates: [(Number, Number)]                                    // X, Y
});

let annotationSchema3D = new mongoose.Schema({
  imageID: { type: mongoose.Schema.Types.ObjectId, ref: "image" },   // Foreign Key
  num_points: { type: Number, required: true },  
  polygonal: { type: Boolean, required: true },
  coordinates: [(Number, Number, Number)]                            // X, Y, Z
}); 

let datasetSchema = new mongoose.Schema({
  name: { type: String, required: true },
  categories: [categorySchema],
  completed: { type: Boolean, required: true },
  commissionerID: { type: Number, required: true }                   // Foreign Key
});

let imageSchema = new mongoose.Schema({
  address: { type: String, required: true },
  dimensions: { type: String, required: true },                               // Determines if 2D or 3D Annotations
  categories: [{ type: mongoose.Schema.Types.ObjectId, ref: "category" }],    // List of Foreign Keys
  datasets: [{ type: mongoose.Schema.Types.ObjectId, ref: "dataset" }]        // List of Foreign keys
});

//
// Alex's data: get rid of
// 
let tagSchema = new mongoose.Schema({
  name: { type: String, required: true },
  colour: { type: String, required: true }
});

let commentSchema = new mongoose.Schema({
  id: Number,
  name: { type: String, required: true },
  title: { type: String, required: true },
  body: { type: String, required: true },
  date: { type: Date, default: Date.now() },
});

let bugSchema = new mongoose.Schema({
  name: { type: String, required: true },
  author: { type: String, required: true },
  status: { type: String, required: true },
  description: { type: String },
  tags: [tagSchema],
  date: { type: Date, default: Date.now() },
  comments: [commentSchema],
});

module.exports = mongoose.model(
  "bugs", bugSchema,
  "category", categorySchema,
  "dataset", datasetSchema,
  "image", imageSchema
);

// Populate: Mongoose method / class that replaces the ID with the actual object.
// You need to use populate to get the object from the reference @ runtime.

