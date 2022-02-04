const express = require('express');
const router = express.Router();
const { getAllTasks, getSingleTask, createATask, deleteATask, updateATask } = require('../controllers/tasks')

router.get('/', getAllTasks);

router.get('/:id', getSingleTask);

router.post('/', createATask);

router.delete('/:id', deleteATask);

router.patch('/:id', updateATask);

module.exports = router;