

function Controller(Model) {
  function getAll(req, res) {
    const { query } = req;
    Model.find(query)
      .then(result => res.json(result))
      .catch(error => res.status(500).send(error));
  }

  function create(req, res) {
    const model = new Model(req.body);
    model.save();
    res.status(201).send(model);
  }
  function getOne(req, res) {
    Model.findById(req.params.id)
      .then(model => res.json(model))
      .catch(error => res.status(500).send(error));
  }
  function update(req, res) {
    Model.findByIdAndUpdate(req.params.id, { ...req.body }, { new: true })
      .then((model) => {
        res.json(model);
      })
      .catch(error => res.status(500).send(error));
  }

  function deleteOne(req, res) {
    Model.findByIdAndUpdate(req.params.id, { deleted: true }, { new: true })
      .then((model) => {
        res.json(model);
      })
      .catch(error => res.status(500).send(error));
  }

  return {
    getAll,
    create,
    getOne,
    update,
    deleteOne
  };
}


module.exports = Controller;
