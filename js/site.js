/* 

Total Monthly Payment = (amount loaned) * (rate/1200) / (1 – (1 + rate/1200)(-Number of Months) )

Remaining Balance before the very first month equals the amount of the loan.

Interest Payment = Previous Remaining Balance * rate/1200

Principal Payment = Total Monthly Payment - Interest Payment

At end each month, Remaining Balance = Previous Remaining Balance - principal payments

*/

let balance = document.getElementById('loanAmount').value;
let term = document.getElementById('payments').value;
let rate = document.getElementById('rate').value;
let results = document.getElementById('results');

//Get values from user
function getValues() {
	// interestPayment = (newBalance * rate) / 1200;

	// principlePayment = monthlyPaymment - interestPayment;

	displayResults();
}

//Logic function
function calcPay(balance, term, rate) {
	let monthlyPayment =
		(balance * (monthlyRate / 1200)) / (1 - (1 + monthlyRate / 1200)(-term));
	return monthlyPayment;
}

function calMonthlyRate(rate) {
	return rate / 1200;
}

function calcMonthlyInterest(balance, monthlyRate) {
	return balance * monthlyRate;
}

//Display results
function displayResults() {
	
}
