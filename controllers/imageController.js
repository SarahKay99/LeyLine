const repository = require("../data/datatypes/imageRepository");

module.exports = {
    upload_photo: async (req, res) => {
        console.log("=== Executing POST /upload ===");
        if (req.files != null) {
            try {
            console.log("req.files != null: proceeding to save file...");
            // save image to database
            const img = req.files.uploadedImg;
            }
            catch(err) {
            console.log(err.message);
            res.end();
            }
        }
        else {
            console.log("___POST /upload ERROR: req.files == null");
        }
        res.end();
    },
}