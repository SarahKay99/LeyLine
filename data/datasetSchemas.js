const mongoose = require("mongoose");

let datasetSchema = new mongoose.Schema({
    name: { type: String, required: true },
    dataType: { type: String, required: true },
    annotationType: {type: String, required: true},
    categories: [categorySchema],
    
    // AUTHORIZATION CRITERIA
    commissioned: { type: Boolean, required: true },
    publicityType: { type: String, required: true },
    copyrightLisence: { type: String, required: true },
    dataPrivacyType: { type: String, required: true },

    // COMPLETION STATUS => If all are true, the dataset is completed.
    requiresMoreData: { type: Boolean, required: true },
    sorted: { type: Boolean, required: true },
    annotated: { type: Boolean, required: true },
});

let adminHierarchySchema = new mongoose.Schema({
    datasetID: { type: mongoose.Schema.Types.ObjectId, ref: 'dataset' },
    commissioner: {},
    admins: [],
    contributors: []
});

// if (dataset.publicityType == "private") {
    // keep track of users who are allowed in.
    // keep track of admin hierarchy
// }

// if (dataset.publicityType == "public addition") {
    // keep track of users who are allowed in.
    // keep track of admin hierarchy
// }

module.exports = mongoose.model("dataset", datasetSchema);