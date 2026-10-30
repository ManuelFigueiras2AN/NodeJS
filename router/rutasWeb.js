const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index', {titulo: 'Bienvenido a la página principal'});
});



module.exports = router;