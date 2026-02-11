# Prototipo de Sistema Bancario - TechSoft S.A.

Este proyecto es un prototipo de API REST desarrollado con Node.js y Express para la gestión de cuentas de ahorros. El sistema implementa validaciones de reglas de negocio, arquitectura limpia y una interfaz de usuario interactiva.

## 🌟 Características
- **Consulta de Saldo en Tiempo Real**: Visualiza tus fondos de manera inmediata.
- **Depósitos Seguros**: Validación para asegurar que solo se acepten montos positivos.
- **Retiros Validados**: Sistema de seguridad que impide retiros si el saldo es insuficiente.
- **Interfaz Interactiva**: Panel web amigable para gestionar transacciones visualmente sin necesidad de herramientas externas.

## 🛠️ Implementación Técnica
- **Arquitectura**: Patrón Controlador-Servicio para una clara separación de responsabilidades.
- **Modularidad**: Uso de ES Modules (`import/export`) siguiendo los estándares modernos de JavaScript.
- **Manejo de Errores**: Respuestas JSON detalladas con códigos de estado HTTP apropiados (400 para errores de validación).

## 📋 Documentación de la API

### 1. Consultar Saldo
- **URL:** `/api/account/balance`
- **Método:** `GET`
- **Respuesta Exitosa:** `{"status": "Success", "currentBalance": 0}`

### 2. Depositar Fondos
- **URL:** `/api/account/deposit`
- **Método:** `POST`
- **Cuerpo (JSON):** `{ "amount": number }`
- **Regla:** El monto debe ser mayor a 0.

### 3. Retirar Fondos
- **URL:** `/api/account/withdraw`
- **Método:** `POST`
- **Cuerpo (JSON):** `{ "amount": number }`
- **Regla:** No se puede retirar un monto mayor al saldo actual.

## ⚙️ Instalación y Configuración

1. **Clonar el repositorio:**
   ```bash
   git clone [https://github.com/MateoJaramilloMorales/techsoft-software-prototype.git](https://github.com/MateoJaramilloMorales/techsoft-software-prototype.git)

   Instalar dependencias:

Bash
npm install
Iniciar la aplicación:

Bash
node app.js
Acceder a la Interfaz: Abre http://localhost:3000 en tu navegador.

👨‍💻 Autor
Mateo Jaramillo Morales TechSoft - 2026
