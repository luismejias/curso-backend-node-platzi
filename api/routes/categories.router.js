const  express  = require('express');
const CategoriesService = require('../services/categories.service');
const router = express.Router();
const service = new CategoriesService();

router.get('/', (req, res) => {
  const categories = service.find()
  res.json(categories);
});

router.get('/:categoryId', (req, res) => {
  const { categoryId,  } = req.params;
  const category = service.findOne(categoryId);
  res.json(category);
});

module.exports = router;
