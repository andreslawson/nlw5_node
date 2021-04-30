import express, { request, response } from "express";

import "./database";

const app = express();

/**
 * GET = Search
 * POST = Create
 * PUT = Change
 * DELETE = Delete
 * PATCH = Change specific information
 */

app.get("/",(request, response) =>{
  return response.json({
    message: "Ola NLW 05!",
  });

});

app.post("/", (request, response) => {
  return response.json({
    message: "Usuario salvo com sucesso!",
  });
});

app.listen(3333, () => console.log("Server is running on port 3333"));
