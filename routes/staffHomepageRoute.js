const express = require('express');
const router = express.Router();

let tasks = [
    { id: 1, name: "Table 5" },
    { id: 2, name: "Serve Drinks" }
];

router.get('/', (req, res) => {
    res.render('staffHomepage', { tasks });
});

router.post('/tasks', (req, res) => {
    const newTask = { id: Date.now(), name: req.body.name };
    tasks.push(newTask);
    res.json({ success: true, task: newTask });
});


router.delete('/tasks/:id', (req, res) => {
    const taskId = parseInt(req.params.id);
    const initialLength = tasks.length;
    tasks = tasks.filter(task => task.id !== taskId);

    if (tasks.length < initialLength) {
        res.json({ success: true });
    } else {
        res.status(404).json({ success: false, message: "Task not found" });
    }
});

module.exports = router;
