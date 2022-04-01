const Handlebars = require('handlebars');
const {
    readFile,
    consultData,
    generar
} = require('../utils/utils')
const plantillas = require('../plantillas/plantillas.json')
const crearPdf = async (req, res) =>{
    const source = await readFile(plantillas.demo);
    const data = consultData();
    const template = Handlebars.compile(source)
    const htmlSource = template(data);
    const resultPath = await generar(htmlSource)
    res.contentType("application/pdf");
    res.send(resultPath)
}

module.exports = {
    crearPdf
}