function Controller(Model) {
  function getAll(req, res) {
    const { query } = req;
    Model.find(query)
      .then(result => res.json(result))
      .catch(error => res.status(500).send(error));
  }
  function getStats(req,res){

    Model.count()
      .then(count => res.json({"elementsCount": count}))
      .catch(error => res.status(500).send(error));


  }

  function create(req, res) {
    const model = new Model(req.body);
    model
      .save()
      .then(() => res.status(201).send(model))
      .catch(error => res.status(500).send(error));
  }
  function getOne(req, res) {
    Model.findOne(req.params.id)
      .then(model => res.json(model))
      .catch(error => res.status(500).send(error));
  }
  function update(req, res) {
    Model.findByIdAndUpdate(
      req.params.id,
      { ...req.body },
      { new: true, runValidators: true }
    )
      .then(model => {
        res.json(model);
      })
      .catch(error => {
        if (error.name === "ValidationError") {
          res.status(422).json(error);
        } else res.status(500).send(error);
      });
  }

  function deleteOne(req, res) {
    Model.findByIdAndDelete(req.params.id)
      .then(model => {
        res.json(model);
      })
      .catch(error => res.status(500).send(error));
  }

  return {
    getAll,
    create,
    getOne,
    update,
    getStats,
    deleteOne
  };
}

module.exports = Controller;
