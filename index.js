const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;
app.use(cors());
//! catagories data
const catagories = require("./data/catagories.json");
//! news data
const news = require("./data/NewsData.json");

app.get("/", (req, res) => {
  res.send("the dragon is runnig");
});

app.get("/news", (req, res) => {
  res.send(news);
});

app.get("/news/:id", (req, res) => {
  const id = req.params.id;
  const selectedID = news.find((n) => n._id === id);
  res.send(selectedID);
});

app.get("/catagories", (req, res) => {
  res.send(catagories);
});

app.get("/catagories/:id", (req, res) => {
  const id = parseInt(req.params.id);
  if (id === 0) {
    res.send(news);
  } else {
    const selectCatagories = news.filter(
      (ns) => parseInt(ns.category_id) === id
    );
    res.send(selectCatagories);
  }
});

app.listen(port, () => {
  console.log(`Dragon API is running on ${port}`);
});
