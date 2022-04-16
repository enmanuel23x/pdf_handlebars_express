const PDFService = require("../services/pdf-service");
const templates = require("../templates/paths.json");

const renderPDF = async (req, res) => {
  const {
    name
  } = req.params;
  // if name is not in the templates folder, return 404
  if (!templates[name]) {
    res.status(404).send({
      error: "Template Not Found"
    });
    return;
  }
  const html = await PDFService.getHTML(name);
  res.contentType("text/html");
  res.send(html);
};

const createPDF = async (req, res) => {
  const {
    name
  } = req.params;
  // if name is not in the templates folder, return 404 
  if (!templates[name]) {
    res.status(404).send({
      error: "Template Not Found"
    });
    return;
  }
  const pdf = await PDFService.getPDF(name);
  res.contentType("application/pdf");
  res.send(pdf);
};

module.exports = {
  createPDF,
  renderPDF,
};