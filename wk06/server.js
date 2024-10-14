const express = require("express");
const booksRoutes = require("./routes/books");
const mongoose = require("mongoose");

const DB_CONNECTION_STRING =
  "mongodb+srv://aadibadola:Aadibadola1@cluster0.tfwphvd.mongodb.net/wk06-lab?retryWrites=true&w=majority&appName=Cluster0";
mongoose
  .connect(DB_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connected to mongoDB");
  })
  .catch((err) => {
    console.log("[ERROR] error while connecting to mongodb: ", err);
  });

const app = express();

const SERVER_PORT = 3001;

app.use(express.json());
app.use(express.urlencoded());

app.use("/api", booksRoutes);

app.route("/").get((req, res) => {
  res.send("<h1>MogoDB + Mongoose Example</h1>");
});

app.listen(SERVER_PORT, () => {
  console.log(`Server running at http://localhost:${SERVER_PORT}/`);
});
