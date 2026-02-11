# Savings Account System Prototype - TechSoft S.A.

This project is a REST API prototype for a professional savings account system. It demonstrates core business logic validation, clean code practices, and RESTful architecture.

## 🚀 Key Features
* **Deposit Money**: Validates positive amounts.
* **Withdraw Money**: Prevents transactions with insufficient funds.
* **Balance Inquiry**: Real-time balance updates.
* **Error Handling**: Comprehensive validation for data types and ranges.

## 🛠️ Technical Stack
* **Language**: JavaScript (Node.js)
* **Framework**: Express.js
* **Architecture**: Controller-Service Pattern
* **Naming Convention**: camelCase

## 📋 API Endpoints

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| **GET** | `/api/account/balance` | Returns the current account balance. |
| **POST** | `/api/account/deposit` | Deposits money (Requires `amount` in JSON). |
| **POST** | `/api/account/withdraw` | Withdraws money (Requires `amount` in JSON). |

## ⚙️ Installation & Usage

1. Clone the repository.
2. Install dependencies:
   ```bash
   npm install