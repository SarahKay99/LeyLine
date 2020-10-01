// Router tells the server what to do in the case of each URL
// Relies on the controllers
const express = require("express");
const categoryController = require('../controllers/categoryController');
const testController = require('../controllers/testBugController');

let router = express.Router();

router.get("/index", categoryController.get_all_categories); 
router.get('/getBugsJson', categoryController.get_all_bugs_json);
router.post('/getBugByIdJson', categoryController.get_bug_by_id_json);
router.get("/save", testController.create_bug);
router.get("/seed", testController.seed_data);
router.get("/addbug", categoryController.create_bug_get);
router.post("/addbug", categoryController.create_bug_post);
router.post('/updateStatus', categoryController.update_bug_status);
router.post('/update', categoryController.update_bug);
router.post('/addTag', categoryController.add_tag);
router.get('/getBugViewComponent', categoryController.get_bug_view_component);

module.exports = router;
