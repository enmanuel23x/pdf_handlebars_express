const express = require('express');
const router = express.Router();
const controller = require('../controllers/pdfController')

router.get('/test', controller.crearPdf)

module.exports = router;