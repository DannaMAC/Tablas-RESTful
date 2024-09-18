const express = require('express');
const router = express.Router();
const controller=require("../controllers/users");

/* POST users user. */
router.post('/', controller.create);
/* GET users listing. */
router.get('/', controller.list);
/* GET user by id. */
router.get('/:id', controller.index);
/* GET user by id. */
router.put('/:id', controller.replace);
/* GET user by id. */
router.patch('/:id', controller.update);
/* GET user by id. */
router.delete('/:id', controller.destroy);

module.exports = router;
