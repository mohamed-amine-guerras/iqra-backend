const { Router } = require('express');
const debug = require('debug')('app: routes');
const Reduction = require('../models/reductionModel');


function router() {
  const reductionRouter = Router();
  reductionRouter.route('/reductions')
    .get((req, res) => {
      const {
        query
      } = req;
      debug(query);
      Reduction.find(query)
        .then(result => res.json(result))
        .catch(error => res.status(500).send(error));
    })
    .post((req, res) => {
      const reduction = new Reduction(req.body);
      reduction.save();
      res.status(201).send(reduction);
    });

  reductionRouter.route('/reductions/:id')
    .get((req, res) => {
      Reduction.findById(req.params.id)
        .then(reduction => res.json(reduction))
        .catch(error => res.status(500).send(error));
    })
    .put((req, res) => {
      Reduction.findByIdAndUpdate(req.params.id, { ...req.body }, { new: true })
        .then((reduction) => {
          res.json(reduction);
        })
        .catch(error => res.status(500).send(error));
    });

  return reductionRouter;
}

module.exports = router();
