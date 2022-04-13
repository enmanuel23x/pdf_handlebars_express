require("dotenv").config();
const express = require("express");
const app = express();

const path = require("path");

//  Routes
const pdfRoutes = require("./src/routes/pdf-routes");
app.use("/pdf", pdfRoutes);


//  Serve static files for the files in the public folder
app.use(express.static(path.join(__dirname, "/src/templates/assets")));



app.listen(process.env.PORT, () =>{
  console.log(`Express Server listening at port ${process.env.PORT}`)
});
