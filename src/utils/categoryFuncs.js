const { postService, categoryService } = require('../services');

const hasCategory = async (categoryIds) => Promise.all(
    categoryIds.map(async (id) => {
        const category = await categoryService.getByCategoryId(id);
        return !!category;
    }),
).then((result) => result.every((value) => value));

const generatePostCategories = async (blogPost, categoryIds) => {
    const postCategories = categoryIds
      .map((category) => ({ postId: blogPost.id, categoryId: category }));
    await postService.createPostCategories(postCategories);
  };

  module.exports = { 
    hasCategory,
    generatePostCategories,
};