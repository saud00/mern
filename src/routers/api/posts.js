
const express = require('express');
const router = express.Router();


// Route Get api/posts/test
router.get('/test', (req, res)=>res.json({msg: 'posts works'}));

module.exports = router;