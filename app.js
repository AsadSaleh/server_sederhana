// Import 3rd party library
const express = require("express");
const path = require("path");

const app = express();
const router = express.Router();

// Request handler
router.get("/", function (req, res) {
  console.log("test masuk apa enggak");
  res.sendFile(path.join(__dirname + "/index.html"));
  //__dirname : It will resolve to your project folder.
});

router.get("/about", function (req, res) {
  res.json({ testduludah: "belum tau isinya apa" });
});

router.get("/sitemap", function (req, res) {
  res.json({ halaman: "site map" });
});

//add the router
app.use("/", router);
app.listen(3000);

console.log("Running at Port 3000");
