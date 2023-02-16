const express = require('express');
const router = express.Router();

router.get('/users', (req, res) => {
  //const { limit, offset } = req.params.id // para users/1
  const { limit, offset } = req.query; // para users?id=1
  if (limit && offset) {
    //validar que existen los parametros solicitados
    res.json({
      limit,
      offset,
    });
  } else {
    res.send('no hay parametros');
  }
});

module.exports = router;

