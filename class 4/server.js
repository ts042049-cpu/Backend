import express from "express";
import route from "./routes/api.js";
const app = express()
app.use(express.json())

app.use(route)

app.listen(3000, () => {
  console.log("http://localhost:3000/");
})