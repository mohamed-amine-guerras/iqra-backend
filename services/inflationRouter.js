const {
  Router
} = require('express');
const Inflation = require('../models/inflationModel');
const {
  getAll,
  create,
  getOne,
  update,
  deleteOne
} = require('../controllers/controller')(Inflation);


function router() {
  const InflationRouter = Router();
  InflationRouter.route('/')
    .get(getAll)
    .post(create);

  InflationRouter.route('/:id')
    .get(getOne)
    .put(update)
    .delete(deleteOne);

  return InflationRouter;
}

module.exports = router();
