const express = require('express');
const router = express.Router();

const controller = require('../controllers/users.js');
/*GET /results/:n1/:n2 -> Sumar n1 + n2
POST /results/ -> Multiplicar n1 * n2
PUT /results/ -> Dividir n1 / n2
PATCH /results/ -> Potencia n1 ^ n2
DELETE /results/:n1/:n2 -> restar n1 - n2*/

/* GET users listing. */
router.get('/', controller.list);
router.get('/:n1/:n2', controller.suma);
router.post('/', controller.multiplica);
router.put('/', controller.divide);
router.patch('/', controller.potencia);
router.delete('/:n1/:n2', controller.resta);

module.exports = router;

