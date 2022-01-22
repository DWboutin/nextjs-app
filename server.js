const express = require("express");
const next = require("next");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const serverRoutes = require("./api/routes");

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

mongoose.Promise = global.Promise;
mongoose.connect(
  `mongodb+srv://Secret:Secret@nextjs-app.pyldb.mongodb.net/users?retryWrites=true&w=majority`,
  (err) => {
    if (err) {
      throw err;
    }
  }
);

app.prepare().then(() => {
  const server = express();

  server.use(bodyParser.json());

  server.use(serverRoutes);

  server.all("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
