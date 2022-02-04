const getAllTasks = (req, res) => {
    res.send("Getting all tasks");
}

const getSingleTask = (req, res) => {
    const { id } = req.params;
    res.send(`Getting task with id: ${id}`);
}

const createATask = (req, res) => {
    const data = req.body;
    res.send(data);
}

const deleteATask = (req, res) => {
    const { id } = req.params;
    res.send(`Deleting task with id: ${id}`);
}

const updateATask = (req, res) => {
    const { id } = req.params;
    const data = req.body;
    res.send({
        data,
        id
    });
}

module.exports = {
    getAllTasks,
    getSingleTask,
    createATask,
    deleteATask,
    updateATask
}