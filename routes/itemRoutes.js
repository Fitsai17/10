const express = require('express');
const router = express.Router();
const itemController = require('../controllers/itemController');

// Отримання всіх елементів
router.get('/', itemController.getAllItems);

// Створення нового елемента
router.post('/', itemController.createItem);

module.exports = router;
