const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async(req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const allCategories = await Category.findAll({
      include: { model: Product },
    })
    res.status(200).json(allCategories)
  } catch (err) {
    res.status(500).json('Something went wrong', err)
  }
});

router.get('/:id', async(req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const oneCategory = await Category.findByPk(req.params.id, {
      include: { model: Product },
    })
    if (!oneCategory) {
      res.status(404).json({ message: 'No Category found with that id!' });
      return;
    }
    res.status(200).json(oneCategory)
  } catch (err) {
    res.status(500).json('Something went wrong', err)
  }
});

router.post('/', async(req, res) => {
  // create a new category
  try {
    const newCategory = await Category.create(req.body);
    res.status(200).json(newCategory)
  } catch (err) {
    res.status(400).json('Something went wrong', err)
  }
});

router.put('/:id', async(req, res) => {
  // update a category by its `id` value
  try {
    const updatedCategory = await Category.update(req.body, {
      where: {
        id: req.params.id
      },
    })
    if (!updatedCategory) {
      res.status(404).json('No Category found with this id!');
      return;
    }
    res.status(200).json({ message: 'Category has been updated' })
  } catch (err) {
    res.status(500).json('Something went wrong', err)
  }
});

router.delete('/:id', async(req, res) => {
  // delete a category by its `id` value
  try {
    const deleted = await Category.destroy({ 
      where: {
        id: req.params.id
      },
    })
    if (!deleted) {
      res.status(404).json({ message: 'No Category found with this id' })
      return;
    }
    res.status(200).json({ message: 'Category has been deleted' })
  } catch (err) {
    res.status(500).json('Something went wrong', err)
  }
});

module.exports = router;

module.exports = router;
