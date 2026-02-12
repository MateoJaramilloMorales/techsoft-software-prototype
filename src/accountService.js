let currentBalance = 0;

export const getBalance = () => currentBalance;

export const deposit = (amount) => {
    if (amount <= 0) throw new Error("El importe del depósito debe ser superior a cero.");
    currentBalance += amount;
    return currentBalance;
};

export const withdraw = (amount) => {
    if (amount <= 0) throw new Error("El importe del retiro debe ser mayor que cero.");
    if (amount > currentBalance) throw new Error("Fondos insuficientes para esta transacción");
    currentBalance -= amount;
    return currentBalance;
};