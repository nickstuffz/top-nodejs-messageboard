const { Router } = require("express");
const indexRouter = Router();
const indexController = require("../controllers/indexController.js");

indexRouter.get("/", indexController.messagesGet);
indexRouter.get("/new", indexController.messagesCreateGet);
indexRouter.post("/new", indexController.messagesCreatePost);

module.exports = indexRouter;
