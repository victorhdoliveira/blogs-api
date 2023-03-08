const { categoryService } = require('../services');

const insertCategory = async (req, res) => {
    const { name } = req.body;
    const category = await categoryService.createCategory({ name });
    res.status(201).json(category);
};

module.exports = { 
    insertCategory,
  };