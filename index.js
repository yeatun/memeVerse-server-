const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());
// const port =process.env.PORT ||  3001;
const userRoute = require("./routes/User");
app.use("/user", userRoute);
const uploadRoute = require("./routes/Upload");
app.use("/upload", uploadRoute);

// app.get('/', (req, res) => {
//   res.send("hello from db it's working ")
// })
// app.listen(3001, (req, res) => {
//   console.log("Server running...");
// });
app.listen(process.env.PORT || PORT, () =>{
  console.log(`Server running... ${PORT}`);
});
// app.listen(process.env.PORT || port)