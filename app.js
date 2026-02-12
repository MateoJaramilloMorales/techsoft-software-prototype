import express from 'express';
// Import controllers from the src folder
// Ensure files exist and include the .js extension for ES Modules
import { handleWithdraw, handleDeposit, handleBalance } from './src/accountController.js';

const app = express();
const PORT = 3000;

// --- Middlewares ---

// 1. Enables the server to parse incoming JSON data
app.use(express.json());

// 2. Serves static UI files (HTML, CSS, Client-side JS)
// This allows the interface to be accessible at http://localhost:3000
app.use(express.static('public'));

// --- API Endpoints ---
// These meet TechSoft's requirement for exposing clear and functional endpoints

// Balance inquiry
app.get('/api/account/balance', handleBalance);

// Deposit operation
app.post('/api/account/deposit', handleDeposit);

// Withdraw operation (includes insufficient funds validation)
app.post('/api/account/withdraw', handleWithdraw);

// --- Server Startup ---
app.listen(PORT, () => {
    console.log('==============================================');
    console.log(`🚀 TechSoft Bank System is running!`);
    console.log(`🏠 Interface: http://localhost:${PORT}`);
    console.log(`📊 API Balance: http://localhost:${PORT}/api/account/balance`);
    console.log('==============================================');
});

export default app;