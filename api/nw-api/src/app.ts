import express from "express"
import bodyParser from "body-parser"

import * as homeController from './controllers/home'

const app = express();

// Express configuration
app.set("port", process.env.PORT || 3000);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", homeController.index)

export default app;