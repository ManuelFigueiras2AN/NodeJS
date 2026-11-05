const express = require('express');
const router = express.Router();
const Escuderia = require('../models/escuderia');

router.get('/', async (req, res) => {

try {
    const escuderiasDB = await Escuderia.find();
    console.log(escuderiasDB);
    res.render("escuderias", {arrayEscuderias: escuderiasDB});
}
catch (error) {
    console.error(error);
    res.status(500).send("Error al obtener las escuderías");
}
});

router.get('/crearEscuderia', (req, res) => {
    res.render("crearEscuderia");
});

router.post('/', async (req, res) => {
    const body = req.body;
    
    try {
        await Escuderia.create(body);
        console.log("Escudería creada");
        res.redirect('/escuderias');
    } catch (error) {
        console.error("Error al crear la escudería:", error);
        res.status(500).send(error);
        
    }
});
module.exports = router;

   /* res.render("escuderias",{
        arrayEscuderias: [
            {id: 1, nombre: "Mercedes", pais: "Alemania", campeonatos: 8},
            {id: 2, nombre: "McLaren", pais: "Reino Unido", campeonatos: 8},
            {id: 3,nombre: "Ferrari", pais: "Italia", campeonatos: 16},
            {id: 4, nombre: "Red Bull", pais: "Austria", campeonatos: 5},
            {id: 5, nombre: "Alpine", pais: "Francia", campeonatos: 0}
        ]
    });*/



