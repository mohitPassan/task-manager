const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send("Getting all tasks");
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    res.send(`Getting task with id: ${id}`);
});

router.post('/', (req, res) => {
    const data = req.body;
    res.send(data);
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    res.send(`Deleting task with id: ${id}`);
});

router.patch('/:id', (req, res) => {
    const { id } = req.params;
    const data = req.body;
    res.send({
        data,
        id
    });
});

module.exports = router;