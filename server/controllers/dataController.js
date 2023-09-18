const dataController = require('express').Router();
const { isAdmin } = require('../middlewares/guards');
const { getAll, deleteById } = require('../services/tattoosService');
const { parseError } = require('../utils/parseError');


dataController.get('/tattoos', async (req, res) => {
    res.json(await getAll());
});

dataController.post('/upload', isAdmin(), async (req, res) => {

});

dataController.delete('/tattoos/:id', isAdmin(), async (req, res) => {
    try {
        await deleteById(req.params.id);
        console.log(`tattoo with id: ${req.params.id} has been deleted.`);
        res.status(204).end();
    } catch(error) {
        const message = parseError(error);
        res.status(400).json({ message });
    }
});

module.exports = dataController;