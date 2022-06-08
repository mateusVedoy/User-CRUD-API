import express from "express";

import { router } from "./adapter/routes/router";

const server = express();

server.use(express.json());

server.use(router);

server.listen(3333, () => {
    console.log("Running at 3333");
});