const { categoryService } = require('../services');

const insertCategory = async (req, res) => {
    try {
        const { name } = req.body;
        const category = await categoryService.createCategory({ name });
        if (!category) throw Error;
        res.status(201).json(category);
    } catch (err) {
    res.status(500).json({
      message: 'Error inserting category in database',
      error: err.message,
    });
  }
};  

const getCategories = async (req, res) => {
    try {
        const categories = await categoryService.getAllCategories();
        if (!categories) throw Error;
        res.status(200).json(categories);
      } catch (err) {
        res.status(500).json({
          message: 'Error searching categories in database',
          error: err.message,
        });
      }
    };

module.exports = { 
    insertCategory,
    getCategories,
  };