const express = require('express'); //import express


const router  = express.Router(); 

const questionController = require('../controllers/question'); 

router.get('/question', questionController.getAllQuestion);

router.post('/question', teaController.newQuestion); 

router.delete('/question', questionController.deleteAllQuestion);


router.get('/question/:name', questionController.getOneQuestion);
router.post('/question/:name', questionController.newComment);
router.delete('/question/:name', questionController.deleteOneQuestion);
// export to use in server.js
module.exports = router; 
