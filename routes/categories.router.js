const express = require('express');
const router = express.Router();

router.get('/categories/:categoryId/products/:productId', (req, res) => {
  const { categoryId, productId } = req.params; //obtener id de la url request de todos los parametos solo el id se obtiene por ponerlo entre corchetes
  res.json({
    categoryId,
    productId,
  });
});

module.exports = router;

