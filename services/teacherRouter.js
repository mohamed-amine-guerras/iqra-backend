const { Router } = require("express");
const { Teacher } = require("../models/teacherSchema");
const {
  getAll,
  create,
  getOne,
  update,
  getStats,
  deleteOne
} = require("../controllers/controller")(Teacher);

function router() {
  const teacherRouter = Router();
  teacherRouter
    .route("/all")
    .get(getAll)
    .post(create);

  teacherRouter
    .route("/stats")
    .get(getStats)

  teacherRouter
    .route("/:id")
    .get(getOne)
    .put(update)
    .delete(deleteOne);

 

  return teacherRouter;
}

module.exports = router();
