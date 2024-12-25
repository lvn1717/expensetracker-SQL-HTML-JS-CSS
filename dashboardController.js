const Income = require('../models/Income');
const Expense = require('../models/Expense');

exports.viewDashboard = (req, res) => {
  Income.getTotal((incomeErr, totalIncomeResult) => {
    if (incomeErr) return res.status(500).send(incomeErr);

    const totalIncome = totalIncomeResult[0]?.total || 0;

    Expense.getTotal((expenseErr, totalExpensesResult) => {
      if (expenseErr) return res.status(500).send(expenseErr);

      const totalExpenses = totalExpensesResult[0]?.total || 0;

      Income.findAll((findIncomeErr, income) => {
        if (findIncomeErr) return res.status(500).send(findIncomeErr);

        Expense.findAll((findExpenseErr, expenses) => {
          if (findExpenseErr) return res.status(500).send(findExpenseErr);

          res.render('dashboard', {
            totalIncome,
            totalExpenses,
            remainingBudget: totalIncome - totalExpenses,
            income,
            expenses,
          });
        });
      });
    });
  });
};





