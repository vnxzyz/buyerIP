const express = require("express");
const app = express();

app.get("/", (req, res) => {
  const data = [
    "170.187.202.107:8085",
    "170.187.202.107:8080"
  ];

  res.json(data);
});

app.listen(3000, () => {
  console.log("Server berjalan pada port 3000");
});
