const express = require("express");
const app = express();
const router = express.Router();
const path = __dirname + '/';

app.use("/",router);
app.use(express.static(__dirname + '/public'));

router.get("/", (req,res) => {
  res.sendFile(path + "index.html");
});

app.listen(80, () => {
  console.log("Live at Port 80");
});
