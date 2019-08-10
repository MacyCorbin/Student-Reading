
const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 3001;
// Define middleware here
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//require("./routes/api-routes")(app);



// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
const mongoURL = process.env.MONGODB_URI || "mongodb://localhost/finaldraft"


mongoose.connect(mongoURL, {useNewUrlParser: true})
  .then(() => {
    console.log("🗄 ==> Successfully connected to mongoDB.");
  })
  .catch((err) => {
    console.log(`Error connecting to mongoDB: ${err}`);
  });

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
