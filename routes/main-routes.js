// Router tells the server what to do in the case of each URL
// Relies on the controllers
const express = require("express");
const bugController = require('../controllers/bugController');
const testController = require('../controllers/testBugController');

let router = express.Router();

router.get("/leyline_index", bugController.get_all_categories); 
router.get('/getBugsJson', bugController.get_all_bugs_json);
router.post('/getBugByIdJson', bugController.get_bug_by_id_json);
router.get("/save", testController.create_bug);
router.get("/seed", testController.seed_data);
router.get("/addbug", bugController.create_bug_get);
router.post("/addbug", bugController.create_bug_post);
router.post('/updateStatus', bugController.update_bug_status);
router.post('/update', bugController.update_bug);
router.post('/addTag', bugController.add_tag);
router.get('/getBugViewComponent', bugController.get_bug_view_component)

module.exports = router;
