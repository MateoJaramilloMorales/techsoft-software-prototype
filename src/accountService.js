let currentBalance = 0;

export const getBalance = () => currentBalance;

export const deposit = (amount) => {
    if (amount <= 0) throw new Error("Deposit amount must be greater than zero");
    currentBalance += amount;
    return currentBalance;
};

export const withdraw = (amount) => {
    if (amount <= 0) throw new Error("Withdrawal amount must be greater than zero");
    if (amount > currentBalance) throw new Error("Insufficient funds for this transaction");
    currentBalance -= amount;
    return currentBalance;
};