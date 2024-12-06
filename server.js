const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');

// Підключення до бази даних (підключення Sequelize, якщо потрібно)
const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('postgres://user:password@localhost:5432/mydatabase');

// Імпорти маршрутів
const styleRoutes = require('./routes/styleRoutes');
const itemRoutes = require('./routes/itemRoutes');

// Налаштування для парсингу JSON
app.use(bodyParser.json());

// Підключення маршрутів для API
app.use('/api/styles', styleRoutes);
app.use('/api/items', itemRoutes);

// Обслуговування статичних файлів
app.use(express.static(path.join(__dirname, 'public')));

// Запуск сервера на порту 3000
app.listen(3006, () => {
    console.log('Server running on http://localhost:3006');
});
