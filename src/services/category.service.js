const { Category } = require('../models');

const createCategory = ({ name }) => {
    const category = Category.create({ name });
    if (!category) throw Error;
    return category;
};

const getAllCategories = () => {
    const allCtegories = Category.findAll();
    if (!allCtegories) throw Error;
    return allCtegories;
};

const getByCategoryId = (id) => Category.findByPk(id);

module.exports = {
    createCategory,
    getAllCategories,
    getByCategoryId,
};