const Handlebars = require("../handlebars");
const {
  readFile,
  consultData,
  convertToPDF
} = require("../utils/utils");
const templates = require("../templates/paths.json");




class PDFService {
  static async getHTML(name) {
    const source = await readFile(templates[name]);
    const data = await consultData({
      mock: false,
      template: name
    });
    const template = Handlebars.compile(source);
    const htmlSource = template(data);
    return htmlSource;
  }

  static async getPDF(name) {
    const source = await readFile(templates[name]);
    const data = await consultData({
      mock: false,
      template: name
    });
    const template = Handlebars.compile(source);
    const htmlSource = template(data);
    const resultPath = await convertToPDF(htmlSource);
    return resultPath;
  }
}

module.exports = PDFService;