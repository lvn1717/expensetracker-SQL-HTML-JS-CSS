const db = require('./db');

const Budget = {
  // Find all budgets
  findAll: (callback) => {
    const query = 'SELECT budget_id AS id, category, amount FROM budgets'; // Map budget_id to id
    db.query(query, (err, results) => {
      if (err) return callback(err);
      callback(null, results);
    });
  },

  // Add a new budget
  create: (data, callback) => {
    const query = 'INSERT INTO budgets (category, amount) VALUES (?, ?)';
    const values = [data.category, data.amount];
    db.query(query, values, callback);
  },

  // Delete a budget
  delete: (id, callback) => {
    const query = 'DELETE FROM budgets WHERE budget_id = ?';
    db.query(query, [id], callback);
  },
};

module.exports = Budget;




