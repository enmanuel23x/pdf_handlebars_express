const { getXlsx } = require('../services/excel-services')

const createXsls = async (req, res) => {
    const {
        name
    } = req.params;
    res.setHeader('Content-Type', 'application/vnd.openxmlformats');
    res.setHeader("Content-Disposition", "attachment; filename=" + name + ".xlsx");
    res.end(await getXlsx(name), 'binary');
}
module.exports = {
    createXsls
};