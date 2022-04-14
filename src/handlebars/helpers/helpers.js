function hbsHelpers(Handlebars) {
  Handlebars.registerHelper("expressPath", function (name, path_to_file) {
    return new Handlebars.SafeString(
      " " +
      name +
      `="http://localhost:${process.env.PORT}/` +
      path_to_file +
      '" '
    );
  });

  return Handlebars;
}
module.exports = hbsHelpers;