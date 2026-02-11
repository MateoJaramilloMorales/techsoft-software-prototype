import * as accountService from './accountService.js';

// GET /api/account/balance
export const handleBalance = (req, res) => {
    const balance = accountService.getBalance();
    res.status(200).json({
        status: "Success",
        currentBalance: balance
    });
};

// POST /api/account/deposit
export const handleDeposit = (req, res) => {
    const { amount } = req.body;
    if (amount === undefined || typeof amount !== 'number') {
        return res.status(400).json({ status: "Error", message: "A valid numeric amount is required" });
    }
    try {
        const newBalance = accountService.deposit(amount);
        res.status(200).json({
            status: "Success",
            message: "Deposit successful",
            currentBalance: newBalance
        });
    } catch (error) {
        res.status(400).json({ status: "Error", message: error.message });
    }
};

// POST /api/account/withdraw
export const handleWithdraw = (req, res) => {
    const { amount } = req.body;
    if (amount === undefined || typeof amount !== 'number') {
        return res.status(400).json({ status: "Error", message: "A valid numeric amount is required" });
    }
    try {
        const newBalance = accountService.withdraw(amount);
        res.status(200).json({
            status: "Success",
            message: "Withdrawal successful",
            currentBalance: newBalance
        });
    } catch (error) {
        res.status(400).json({ status: "Error", message: error.message });
    }
};