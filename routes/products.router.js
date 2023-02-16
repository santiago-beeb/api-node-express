const express = require('express');

const ProductsService = require('./../services/product.service');
const validatorHandler = require('./../middlewares/validatior.handler');
const {
  createProductSchema,
  updateProductSchema,
  getProductSchema,
} = require('./../schemas/product.schema');

const router = express.Router();
const service = new ProductsService();

router.get('/', async (req, res) => {
  const products = await service.find();
  res.json(products);
});

router.get('/filter', (req, res) => {
  res.send('soy filter');
});

router.get('/:id',
  validatorHandler(getProductSchema, 'params'),//primero se validan los datos para luego conectarse con el servicio
    async (req, res, next) => {
      try {
        const { id } = req.params; //obtener id de la url request de todos los parametos solo el id se obtiene por ponerlo entre corchetes
        const product = await service.findOne(id);
        res.json(product);
      } catch (err) {
        next(err);
      }
    }
);

router.post('/',
  validatorHandler(createProductSchema, 'body'),
  async (req, res) => {
    const body = req.body;
    const newProduct = await service.create(body);
    res.json(newProduct);
  });

router.patch('/:id',
  validatorHandler(getProductSchema, 'params'),//primero se valida el id y luego el body del update
  validatorHandler(updateProductSchema, 'body'),
  async (req, res) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const product = await service.update(id, body);
      res.json(product);
    } catch (err) {
      res.status(404).json({
        message: err.message,
      });
    }
  });

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const resp = await service.delete(id);
  res.json(resp);
});

module.exports = router;
