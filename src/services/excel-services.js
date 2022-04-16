const ExcelJS = require('exceljs');
const demoData = require('../examples/examples-excel.json')

const getFirstRowCells = (worksheet) => {
    return worksheet._rows[0]._cells.map(el => el._address);
}
const addRows = (worksheet, dataSource) => {
    for (const data of dataSource) {
        worksheet.addRow(data);
    }
    return worksheet;
}
const StyleCellsFill = (worksheet, cells, fillData) => {
    for (const cell of cells) {
        worksheet.getCell(cell).fill = fillData;
    }
    return worksheet;
}
const StyleCellsFont = (worksheet, cells, fillData) => {
    for (const cell of cells) {
        worksheet.getCell(cell).font = fillData;
    }
    return worksheet;
}
const setHeadRow = (worksheet, dataSource) => {
    worksheet.columns = dataSource;
    return worksheet;
}
const getXlsx = (name) => {
    const dataSource = demoData[name];
    let workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet(name, { properties: { defaultColWidth: 30 } });
    setHeadRow(workbook, dataSource.header);
    addRows(worksheet, dataSource.data);
    const headCells = getFirstRowCells(worksheet);
    StyleCellsFill(worksheet, headCells, dataSource.fill);
    StyleCellsFont(worksheet, headCells, dataSource.font);
    return workbook.xlsx.writeBuffer();
}

module.exports = {
    getXlsx
};