let myAccount = {
    name: 'Conan Edogawa',
    expenses: 0,
    income: 0
}

let addExpense = function(account, amount) {
    account.expenses = account.expenses + amount;
    // console.log(account);
}

// addIncome
let addIncome = function(account, income){
    account.income = account.income + income;
}

// resetAccount
let resetAccount = function(account){
    account.expenses = 0;
    account.income = 0;
}

// getAccountSummary 
let getAccountSummary = function(account){
    let balance = account.income - account.expenses;
    return `Account for ${account.name} has ${balance}. ${account.income} in income. ${account.expenses} in expenses.`;
}

addIncome(myAccount, 1000000);
addExpense(myAccount, 900000);
addExpense(myAccount, 50000);

console.log(getAccountSummary(myAccount));
resetAccount(myAccount);
console.log(getAccountSummary(myAccount));

// account for conan edogawa has 900000. 1000000 in income. 100000 in expenses.

