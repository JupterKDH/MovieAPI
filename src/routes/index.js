const { Router } = require("express");

const sessionsRouter = require("./sessions.routes");
const moviesRouter = require("./movies.routes");
const usersRouter = require("./users.routes");
const tagsRouter = require("./tags.routes");

const routes = Router();
routes.use("/sessions", sessionsRouter);
routes.use("/movies", moviesRouter);
routes.use("/users", usersRouter);
routes.use("/tags", tagsRouter);

module.exports = routes;