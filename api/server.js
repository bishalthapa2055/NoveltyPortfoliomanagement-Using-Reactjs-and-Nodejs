import express from "express";
import bodyparser from "body-parser";
const app = express();
const port = process.env.PORT || "5000";
import web from "./routes/routes.js";
import cors from "cors";

// Body-parser middleware
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
app.use(cors());
// app.use(function (req, res, next) {
//   res.header("Access-Control-Allow-Origin", "http://127.0.0.1:8000");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   next();
// });

app.use("/api", web);

app.listen(port, () => {
  console.log(`Listening https://127.0.0.1:${port}`);
});
