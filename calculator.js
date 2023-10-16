window.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById("calc-form");
  if (form) {
    setupInitialValues();
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  };
}

function setupInitialValues() {

  document.getElementById("loan-amount").value = 10000;
  document.getElementById("loan-years").value = 3;
  document.getElementById("loan-rate").value = 5.0;

  // Calculate and display the initial monthly payment.
  update();
}

function update() {

  const values = getCurrentUIValues();


  const monthlyPayment = calculateMonthlyPayment(values);


  updateMonthly(monthlyPayment);
}

function calculateMonthlyPayment(values) {
  const principal = values.amount;
  const annualInterestRate = values.rate / 100;
  const numberOfPayments = values.years * 12;
  const monthlyInterestRate = annualInterestRate / 12;


  const monthlyPayment =
    (principal * monthlyInterestRate) /
    (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));


  return monthlyPayment.toFixed(2);
}

function updateMonthly(monthly) {

  document.getElementById("monthly-payment").innerText = `$${monthly}`;
}
