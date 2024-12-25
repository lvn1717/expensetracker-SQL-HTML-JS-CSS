const Income = require('../models/Income');

// View Income
exports.viewIncome = (req, res) => {
  Income.findAll((err, income) => {
    if (err) return res.status(500).send(err);
    res.redirect('/'); 
  });
};

// Add Income
exports.addIncome = (req, res) => {
  const { source, amount, date, description } = req.body;
  Income.create({ source, amount, date, description }, (err) => {
    if (err) return res.status(500).send(err);
    res.redirect('/');
  });
};

// Delete Income
exports.deleteIncome = (req, res) => {
  const { id } = req.params;
  if (!id) {
    return res.status(400).send('Income ID is required');
  }
  Income.delete(id, (err) => {
    if (err) return res.status(500).send(err);
    res.redirect('/');
  });
};



