const hbsPartials = require("./partials/partials");
const hbsHelpers = require("./helpers/helpers");
const Handlebars = hbsPartials(hbsHelpers(require('handlebars')));


module.exports = Handlebars;