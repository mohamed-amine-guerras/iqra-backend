const { Router } = require('express');
const { Student } = require('../models/studentSchema');
const {
  getAll,
  create,
  getOne,
  update,
  deleteOne
} = require('../controllers/controller')(Student);



function router() {
  const teacherRouter = Router();
  teacherRouter.route('/')
    .get(getAll)
    .post(create);

  teacherRouter.route('/:id')
    .get(getOne)
    .put(update)
    .delete(deleteOne);

  return teacherRouter;
}

module.exports = router();
