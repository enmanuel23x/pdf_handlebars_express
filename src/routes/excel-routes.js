const express = require("express");
const router = express.Router();
const ExcelRouter = require("../controllers/excel-controller");

// Generate xlsx
router.get("/generate/:name", ExcelRouter.createXsls);

module.exports = router;