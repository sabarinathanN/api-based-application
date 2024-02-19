const express = require('express'); 
const feedController = require('../controller/feeds');

const router = express.Router();

router.get('/posts',feedController.getPost);

router.post('/createpost',feedController.createPost);

module.exports = router;