function calculateBorrowingCapacity() {
    const grossIncome = document.getElementById('grossIncome').value;
    const monthlyExpenses = document.getElementById('monthlyExpenses').value;
    const otherCommitments = document.getElementById('otherCommitments').value;
  
    const multiplier = 6.5;
    const annualExpenses = (parseFloat(monthlyExpenses) + parseFloat(otherCommitments)) * 12;
    const borrowingCapacity = (parseFloat(grossIncome) - annualExpenses) * multiplier;
  
    document.getElementById('result').innerText = `Your estimated borrowing capacity is: $${borrowingCapacity.toFixed(2)}`;
  }
  