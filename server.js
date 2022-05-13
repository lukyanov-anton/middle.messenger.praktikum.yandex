const express = require("express");
const helmet = require("helmet");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "dist")));
app.use(
  helmet({
    contentSecurityPolicy: {
      useDefaults: true,
      directives: {
        "script-src": ["'self'", "'unsafe-eval'"],
        "connect-src": ["ya-praktikum.tech", "wss://ya-praktikum.tech"],
        "img-src": ["'self'", "data:", "ya-praktikum.tech"],
        "object-src": ["'self'"],
      },
    },
  })
);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./dist/index.html"));
});

app.listen(PORT, function () {
  console.log(`Example app listening on port ${PORT}!`);
});
