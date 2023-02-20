import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { NestExpressApplication } from "@nestjs/platform-express";
import cookieParser from "cookie-parser";
import cors from "cors";
import * as dotenv from "dotenv";
dotenv.config();

NestFactory.create<NestExpressApplication>(AppModule)
  .then(async (app) => {
    app.use(cookieParser());
    app.use(cors());
    await app.listen(3001);
  })
  .catch((err) => {
    console.log(err);
  });
