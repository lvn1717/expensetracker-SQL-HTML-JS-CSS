const Budget = require('../models/Budget');

// View Budgets
exports.viewBudgets = (req, res) => {
  Budget.findAll((err, budgets) => {
    if (err) return res.status(500).send(err);
    res.render('budgets', { budgets });
  });
};

// Add Budget
exports.addBudget = (req, res) => {
  const { category, amount } = req.body;
  Budget.create({ category, amount }, (err) => {
    if (err) return res.status(500).send(err);
    res.redirect('/budgets');
  });
};

// Delete Budget
exports.deleteBudget = (req, res) => {
  const { id } = req.params;
  if (!id) {
    return res.status(400).send('Budget ID is required');
  }
  Budget.delete(id, (err) => {
    if (err) return res.status(500).send(err);
    res.redirect('/budgets');
  });
};



