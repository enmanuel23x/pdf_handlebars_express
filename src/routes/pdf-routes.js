const express = require("express");
const router = express.Router();
const PdfController = require("../controllers/pdf-controller");

// Generate PDFs
router.get("/generate/:name", PdfController.createPDF);

// Serve PDFs in the browser (for testing only)
if (process.env.NODE_ENV === "development") {
  router.get("/render/:name", PdfController.renderPDF);
}

module.exports = router;