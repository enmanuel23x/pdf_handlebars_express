function hbsPartials(Handlebars) {
    Handlebars.registerPartial('myPartial', '{{prefix}}');
    return Handlebars;
}


module.exports = hbsPartials;