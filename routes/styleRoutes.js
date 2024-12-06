const express = require('express');
const router = express.Router();
const styleController = require('../controllers/styleController');

// Отримання всіх стилів
router.get('/', styleController.getAllStyles);

// Створення нового стилю
router.post('/', styleController.createStyle);

module.exports = router;
