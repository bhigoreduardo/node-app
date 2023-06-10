import * as dotenv from "dotenv";
import express from "express";
import http from "http";
import cors from "cors";
import cookieParser from "cookie-parser";
import compression from "compression";
import bodyParser from "body-parser";
import mongoose from "mongoose";

import routes from "./routes";

const app = express();

dotenv.config();
app.use(cors({ credentials: true }));
app.use(cookieParser());
app.use(compression());
app.use(bodyParser.json());

const server = http.createServer(app);
server.listen(8080, () => {
  console.log("Server running on http://localhost:8080");
});

mongoose.Promise = Promise;
mongoose.connect(process.env.DATABASE_URL); // DATABASE_URL
mongoose.connection.on("error", (error: Error) => console.log(error));

app.use("/", routes());
