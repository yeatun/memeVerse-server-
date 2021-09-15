const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());
// const port =process.env.PORT ||  3001;
const mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "SocialMedia",
});

// module.exports = db;
const userRoute = require("./routes/User");
app.use("/user", userRoute);

const uploadRoute = require("./routes/Upload");
app.use("/upload", uploadRoute);



// app.listen(3001, (req, res) => {
//   console.log("Server running...");
// });
app.listen(process.env.PORT || PORT, () =>{
  console.log(`Server running... ${PORT}`);
});
// app.listen(process.env.PORT || port)