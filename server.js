const express = require("express");
const { connectToDB } = require("./config/db_connection");
const routes = require("./routes/landing");
// To load env vars so that i dont have to put creds into the code
require("dotenv").config();

// create the app
const app = express();
const PORT = process.env.PORT || 54321;

// tell the app to check the routes on each connection
app.use(routes);

// connect to the mongo client and after connecting, print message and start the webserver
connectToDB((err) => {
  !err
    ? console.log(
        "\n\nApp finsihed connecting to the db @ http://localhost:4444"
      )
    : process.exit(1);

  // start the webserver
  app.listen(PORT, () => {
    console.log(
      `\nServer started and listening on port ${PORT} --> http://localhost:${PORT}\n`
    );
  });
});
