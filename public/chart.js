document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('analyticsChart');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');

  // Retrieve data from data attributes
  const labels = canvas.dataset.labels.split(',');
  const incomeData = canvas.dataset.income.split(',').map(Number);
  const expenseData = canvas.dataset.expenses.split(',').map(Number);

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [
        {
          label: 'Income',
          data: incomeData,
          backgroundColor: 'rgba(75, 192, 192, 0.5)',
        },
        {
          label: 'Expenses',
          data: expenseData,
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          display: true,
          position: 'top',
        },
      },
      scales: {
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: 'Amount ($)',
          },
        },
        x: {
          title: {
            display: true,
            text: 'Months',
          },
        },
      },
    },
  });
});




