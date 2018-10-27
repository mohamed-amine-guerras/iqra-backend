const { Router } = require("express");
const { Session } = require("../models/sessionSchema");
const {
  getAll,
  create,
  getOne,
  update,
  deleteOne
} = require("../controllers/controller")(Session);

function router() {
  const sessionRouter = Router();
  sessionRouter
    .route("/")
    .get(getAll)
    .post(create);

  sessionRouter
    .route("/:id")
    .get(getOne)
    .put(update)
    .delete(deleteOne);

  return sessionRouter;
}

module.exports = router();
