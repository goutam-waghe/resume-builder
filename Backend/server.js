import app from "./app.js";
const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log("server is running on port " + port);
});
