const {
  Router
} = require('express');
const Deflation = require('../models/deflationModel');
const {
  getAll,
  create,
  getOne,
  update,
  deleteOne
} = require('../controllers/controller')(Deflation);


function router() {
  const deflationRouter = Router();
  deflationRouter.route('/')
    .get(getAll)
    .post(create);

  deflationRouter.route('/:id')
    .get(getOne)
    .put(update)
    .delete(deleteOne);

  return deflationRouter;
}

module.exports = router();
