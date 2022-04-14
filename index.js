require("dotenv").config();
const express = require("express");
const logger = require("morgan");
const livereload = require("livereload");
const connectLiveReload = require("connect-livereload");
const path = require("path");
const createError = require("http-errors");
const app = express();

//logger
if (process.env.LOGGER == "true") {
  app.use(logger("dev"));
}


//livereload
if (process.env.NODE_ENV === "development") {
  const liveReloadServer = livereload.createServer();
  liveReloadServer.server.once("connection", () => {
    setTimeout(() => {
      liveReloadServer.refresh("/");
    }, 100);
  });
  app.use(connectLiveReload({
    ignore: ['/pdf/generate']
  }));
}


//  Routes
app.use("/pdf", require("./src/routes/pdf-routes"));


//  Serve static files for the files in the public folder
app.use(express.static(path.join(__dirname, "/src/templates/assets")));


// Set enginge view
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");


// catch 404 and forward to error handler
app.use(function () {
  next(createError(404));
});


// error handler
app.use(function (err, res) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = process.env.NODE_ENV === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});


module.exports = app;