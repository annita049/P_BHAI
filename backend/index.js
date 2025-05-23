import mongoose from "mongoose";
import { server } from "./app/utility/sockets.js";
import dotenv from "dotenv";
dotenv.config();

console.log("dotenv" , process.env.DB_URI);

mongoose
  .connect(process.env.DB_URI)
  .then(() => {
    server.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch((err) => {
    console.log(err);
  });
