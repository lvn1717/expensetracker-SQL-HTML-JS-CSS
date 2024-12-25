const db = require('./db');

const Recurring = {
  // Find all recurring entries
  findAll: (callback) => {
    const query = 'SELECT recurring_id AS id, type, category, amount, frequency, start_date, end_date FROM recurring'; // Map recurring_id to id
    db.query(query, (err, results) => {
      if (err) return callback(err);
      callback(null, results);
    });
  },

  // Add a new recurring entry
  create: (data, callback) => {
    const query =
      'INSERT INTO recurring (type, category, amount, frequency, start_date, end_date) VALUES (?, ?, ?, ?, ?, ?)';
    const values = [data.type, data.category, data.amount, data.frequency, data.start_date, data.end_date];
    db.query(query, values, callback);
  },

  // Delete a recurring entry
  delete: (id, callback) => {
    const query = 'DELETE FROM recurring WHERE recurring_id = ?';
    db.query(query, [id], callback);
  },
};

module.exports = Recurring;

