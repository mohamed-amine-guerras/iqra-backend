const { Router } = require("express");
const { Student } = require("../models/studentSchema");
const {
  getAll,
  create,
  getOne,
  update,
  deleteOne
} = require("../controllers/controller")(Student);

function router() {
  const studentRouter = Router();
  studentRouter
    .route("/")
    .get(getAll)
    .post(create);

  studentRouter
    .route("/:id")
    .get(getOne)
    .put(update)
    .delete(deleteOne);

  return studentRouter;
}

module.exports = router();
