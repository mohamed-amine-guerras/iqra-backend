const { Router } = require('express');
const { Reduction } = require('../models/reductionModel');
const {
  getAll,
  create,
  getOne,
  update,
  deleteOne
} = require('../controllers/controller')(Reduction);


function router() {
  const reductionRouter = Router();
  reductionRouter.route('/')
    .get(getAll)
    .post(create);

  reductionRouter.route('/:id')
    .get(getOne)
    .put(update)
    .delete(deleteOne);

  return reductionRouter;
}

module.exports = router();
