const express = require('express')
const app = express();
const tasks = require('./routes/tasks')

app.use(express.json());
app.use('/tasks', tasks);

app.listen(8000, () => console.log("Server started on 8000"));