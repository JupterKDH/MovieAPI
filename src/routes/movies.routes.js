const { Router } = require("express");

const MoviesController = require("../controllers/moviesController");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

const moviesRouter = Router();

const moviesController = new MoviesController();
moviesRouter.use(ensureAuthenticated);

moviesRouter.get("/", moviesController.index);
moviesRouter.post("/", moviesController.create);
moviesRouter.get("/:id", moviesController.show);
moviesRouter.delete("/:id", moviesController.delete);


module.exports = moviesRouter;