const db = require('./db');

const Expense = {
  findAll: (callback) => {
    const query =
      'SELECT expense_id AS id, category, amount, DATE_FORMAT(date, "%Y-%m-%d") AS date, description FROM expenses';
    db.query(query, (err, results) => {
      if (err) return callback(err);
      callback(null, results);
    });
  },

  create: (data, callback) => {
    const query = 'INSERT INTO expenses (category, amount, date, description) VALUES (?, ?, ?, ?)';
    const values = [data.category, data.amount, data.date, data.description];
    db.query(query, values, callback);
  },

  delete: (id, callback) => {
    const query = 'DELETE FROM expenses WHERE expense_id = ?';
    db.query(query, [id], callback);
  },

  getTotal: (callback) => {
    const query = 'SELECT SUM(amount) AS total FROM expenses';
    db.query(query, (err, results) => {
      if (err) return callback(err);
      callback(null, results);
    });
  },
};

module.exports = Expense;




