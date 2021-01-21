const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.js');
const multermiddel = require('../middleware/multer')



router.post('/myImages', multermiddel, authController.images );
router.get('/fetech', authController.fetchAll);
//router.delete("/:id"

module.exports = router;