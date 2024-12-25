const Income = require('../models/Income');
const Expense = require('../models/Expense');

exports.viewAnalytics = (req, res) => {
  // Fetch all income and expenses
  Income.findAll((incomeErr, income) => {
    if (incomeErr) return res.status(500).send(incomeErr);

    Expense.findAll((expenseErr, expenses) => {
      if (expenseErr) return res.status(500).send(expenseErr);

      // Prepare data grouped by months
      const monthLabels = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December',
      ];

      const incomeByMonth = Array(12).fill(0); // Initialize array for 12 months
      const expenseByMonth = Array(12).fill(0);

      income.forEach((item) => {
        const month = new Date(item.date).getMonth(); // Get month index (0-11)
        incomeByMonth[month] += item.amount;
      });

      expenses.forEach((item) => {
        const month = new Date(item.date).getMonth(); // Get month index (0-11)
        expenseByMonth[month] += item.amount;
      });

      // Render the analytics page with both income and expense data
      res.render('analytics', {
        labels: monthLabels, // Month names as labels
        incomeValues: incomeByMonth, // Monthly income totals
        expenseValues: expenseByMonth, // Monthly expense totals
      });
    });
  });
};


