const db = require('../models');

exports.getAllStyles = async (req, res) => {
  try {
    const styles = await db.Style.findAll();
    res.json(styles);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Створіть інші методи (create, update, delete) аналогічно
