const db = require('./db');

const Income = {
  findAll: (callback) => {
    const query = 'SELECT income_id AS id, source, amount, DATE_FORMAT(date, "%Y-%m-%d") AS date, description FROM income';
    db.query(query, (err, results) => {
      if (err) return callback(err);
      callback(null, results);
    });
  },

  create: (data, callback) => {
    const query = 'INSERT INTO income (source, amount, date, description) VALUES (?, ?, ?, ?)';
    const values = [data.source, data.amount, data.date, data.description];
    db.query(query, values, callback);
  },

  delete: (id, callback) => {
    const query = 'DELETE FROM income WHERE income_id = ?';
    db.query(query, [id], callback);
  },

  getTotal: (callback) => {
    const query = 'SELECT SUM(amount) AS total FROM income';
    db.query(query, (err, results) => {
      if (err) return callback(err);
      callback(null, results);
    });
  },
};

module.exports = Income;







