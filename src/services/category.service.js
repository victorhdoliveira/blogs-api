const { Category } = require('../models');

const createCategory = ({ name }) => Category.create({ name });

const getAllCategories = () => Category.findAll();

const getByCategoryId = (id) => Category.findByPk(id);

module.exports = {
    createCategory,
    getAllCategories,
    getByCategoryId,
};