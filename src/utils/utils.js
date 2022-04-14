const fs = require("fs");
const html_to_pdf = require("html-pdf-node");
const mockData = require("../examples/examples.json");

const readFile = (fileName) =>
  new Promise((resolve) => {
    fs.readFile(fileName, "utf8", (err, data) => {
      resolve(data);
    });
  });

const consultData = (objectParams) => {
  if (objectParams.mock) {
    // simulate the delay of the data fetching and get the data from a json file
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(mockData[objectParams.template]);
      }, 3000);
    });
  }
  return {
    Name: "John Doe",
    Date: new Date().toISOString(),
  };
};

const convertToPDF = (htmlSource) =>
  new Promise((resolve) => {
    const options = {
      format: "A4",
      printBackground: true
    };
    const file = {
      content: htmlSource
    };
    html_to_pdf.generatePdf(file, options).then((pdfBuffer) => {
      resolve(pdfBuffer);
    });
  });

module.exports = {
  readFile,
  consultData,
  convertToPDF,
};