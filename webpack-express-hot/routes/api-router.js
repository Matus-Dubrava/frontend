const router = require('express').Router();

router.get('/', (req, res, next) => {
  res.send({ message: 'Hello from Express!' });
});

router.get('/users', (req, res, next) => {
  res.send({ message: 'Visiting users api.' });
});

module.exports = router;
