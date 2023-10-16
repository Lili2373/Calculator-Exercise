it("should calculate the monthly rate correctly", function () {
  // Define test values
  const values = {
    amount: 20000,
    years: 5,
    rate: 6.5,
  };


  expect(calculateMonthlyPayment(values)).toEqual('391.32');
});


it("should return a result with 2 decimal places", function () {
  const values = {
    amount: 15000,
    years: 4,
    rate: 7.2,
  };

  expect(calculateMonthlyPayment(values)).toEqual('360.59');
})
