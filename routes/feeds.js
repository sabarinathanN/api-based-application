const express = require('express'); 
const feedController = require('../controller/feeds');

const router = express.Router();

router.get('/posts',feedController.getPost);

//verify token and data are
router.get('/posts/:postId',feedController.getveifytoken)

router.post('/createpost',feedController.createPost);

module.exports = router;