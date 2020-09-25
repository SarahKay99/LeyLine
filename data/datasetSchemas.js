const mongoose = require("mongoose");

let datasetSchema = new mongoose.Schema({
    name: { type: String, required: true },
    categories: [categorySchema],
    completed: { type: Boolean, required: true },
    commissionerID: { type: mongoose.Schema.Types.ObjectId, ref: "users" }      // Foreign Key.
});

module.exports = mongoose.model("dataset", datasetSchema);