const Recurring = require('../models/Recurring');

// View Recurring
exports.viewRecurring = (req, res) => {
  Recurring.findAll((err, recurring) => {
    if (err) return res.status(500).send(err);
    res.render('recurring', { recurring });
  });
};

// Add Recurring Entry
exports.addRecurring = (req, res) => {
  const { type, category, amount, frequency, start_date, end_date } = req.body;
  Recurring.create({ type, category, amount, frequency, start_date, end_date }, (err) => {
    if (err) return res.status(500).send(err);
    res.redirect('/recurring');
  });
};

// Delete Recurring Entry
exports.deleteRecurring = (req, res) => {
  const { id } = req.params;
  if (!id) {
    return res.status(400).send('Recurring ID is required');
  }
  Recurring.delete(id, (err) => {
    if (err) return res.status(500).send(err);
    res.redirect('/recurring');
  });
};
