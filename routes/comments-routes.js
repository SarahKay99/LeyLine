const express = require("express");

let router = express.Router();

router.get('/', (req, res) => {
    res.send('Not Implemented');
});

module.exports = router;