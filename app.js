import express from 'express';
// Importamos los controladores desde la carpeta src
// Asegúrate de que los archivos existan y tengan la extensión .js
import { handleWithdraw, handleDeposit, handleBalance } from './src/accountController.js';

const app = express();
const PORT = 3000;

// --- Middlewares ---

// 1. Permite que el servidor entienda datos en formato JSON
app.use(express.json());

// 2. Sirve los archivos de la interfaz (HTML, CSS, JS del cliente)
// Esto hará que al entrar a http://localhost:3000 se vea tu interfaz
app.use(express.static('public'));

// --- API Endpoints ---
// Estos cumplen con el requerimiento de TechSoft de exponer endpoints claros

// Consulta de saldo
app.get('/api/account/balance', handleBalance);

// Operación de depósito
app.post('/api/account/deposit', handleDeposit);

// Operación de retiro (con validación de saldo insuficiente)
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