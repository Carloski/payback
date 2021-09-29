// listen for event
document.getElementById('btn-submit').addEventListener('click', getValues);


//controller function
function getValues() {
    const amount = document.getElementById('loanAmount').value;
    const term = document.getElementById('term').value;
    const rate = document.getElementById('rate').value;


    let principle = parseFloat(amount);
    let yearlyRate = parseFloat(rate) / 1200;
    let yearlyTerm = parseFloat(term) * 12;

    //calculate monthly payment
    const x = Math.pow(1 + yearlyRate, yearlyTerm)
    monthlyPayment = (principle * x * yearlyRate) / (x - 1);
    totalInterest = monthlyPayment * yearlyTerm - principle;
    totalPrinciple = principle;
    totalCost = principle + totalInterest;


    displayResults(monthlyPayment, principle, totalInterest, totalCost); 
}


function displayResults() {
    document.getElementById('monthlyPayments').innerHTML = `$ ${monthlyPayment.toFixed(2)}`;
    document.getElementById('totalPrinciple').innerHTML = `$ ${totalPrinciple.toFixed(2)}`;
    document.getElementById('totalInterest').innerHTML = `$ ${totalInterest.toFixed(2)}`;
    document.getElementById('totalCost').innerHTML = `$ ${totalCost.toFixed(2)}`;
}


