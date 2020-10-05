const repo = require("../data/datatypes/imageRepository");

module.exports = {
    upload_photo: async (req, res) => {
        console.log("=== Executing POST /upload ===");
        if (req.files != null) {
            try {
                console.log("=== Proceeding to save file... ===");
                
                const uploadedImg = req.files.uploadedImg;
                console.log(uploadedImg);

                // turn img into imageSchemas-compatible object
                dbImg = {
                    img: uploadedImg.data,
                    size: uploadedImg.size,
                    address: null,
                    dimensions: null,
                    categories: [],
                    datasets: [],
                    annotations: []
                }

                repo.InsertSingleImage(dbImg)
                .then((result) => {
                    console.log("DB IMG = ", result);
                    // Make success pop-up appear.
                })
                .catch((err) => {
                    console.log(`___imageController.js upload_photo ERROR: ${err}`);
                    // Make error pop-up appear.
                })
            }
            catch(err) {
                console.log(`___imageController.js upload_photo ERROR: ${err}`);
            }
        }
        else {
            console.log("___imageController.js upload_photo ERROR: req.files == null");
        }

        // Refresh the page. Make the code so that the page doesn't need to refresh?
        res.redirect('/index');
        res.end();
    },
}