const Expense = require('../models/Expense');

// View Expenses
exports.viewExpenses = (req, res) => {
  Expense.findAll((err, expenses) => {
    if (err) return res.status(500).send(err);
    res.render('/', { expenses });
  });
};

// Add Expense
exports.addExpense = (req, res) => {
  const { category, amount, date, description } = req.body;
  Expense.create({ category, amount, date, description }, (err) => {
    if (err) return res.status(500).send(err);
    res.redirect('/');
  });
};

// Delete Expense
exports.deleteExpense = (req, res) => {
  const { id } = req.params;
  if (!id) {
    return res.status(400).send('Expense ID is required');
  }
  Expense.delete(id, (err) => {
    if (err) return res.status(500).send(err);
    res.redirect('/');
  });
};



