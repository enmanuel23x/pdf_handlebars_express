const fs = require('fs');
const html_to_pdf = require('html-pdf-node');

const readFile = (fileName) => new Promise((resolve,) => {
    fs.readFile(fileName, "utf8", (err, data) => {
        resolve(data)
    })
    }
);

const consultData = () => {
    return data = {
        "Name": "Enmanuel", 
        "Date": (new Date()).toISOString()
    };
}

const generar = (htmlSource) => new Promise((resolve,) => {
    const options = { format: 'A4' };
    const file = { content: htmlSource };
    html_to_pdf.generatePdf(file, options).then(pdfBuffer => {
        resolve(pdfBuffer)
    });
});

module.exports = {
    readFile,
    consultData,
    generar
}