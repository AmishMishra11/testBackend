import express from "express";
import { router } from "./src/routers/test";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello Backend!");
});

// app.use("/test", router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
