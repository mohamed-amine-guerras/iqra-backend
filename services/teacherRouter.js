const { Router } = require('express');
const { Teacher } = require('../models/teacherSchema');
const {
  getAll,
  create,
  getOne,
  update,
  deleteOne
} = require('../controllers/controller')(Teacher);



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
