import Task from '../models/Tasks'

export const getTasks = async (req, res) => {
    try {
        const tasks = await Task.find();
        res.json(tasks);
    } catch (error) {
        res.status(500).json({
            message: error.message || "Something goes wrong while retrieving tasks",
        });
    }
};

export const createTasks = async (req, res) => {
    if (!req.body.tittle) {
        return res.status(400).json({
            message: "Tittle is required",
        });
    }

    try {
        const task = new Task(
            {
                tittle: req.body.tittle,
                description: req.body.description,
                done: req.body.done ? req.body.done : false
            });
        const taskSave = await task.save();
        res.json(taskSave);
    } catch (error) {
        res.status(500).json({
            message: error.message || "Something goes wrong while creating a task",
        });
    }
};

export const findTask = async (req, res) => {
    const tasks = await Task.findById(req.params.id);
    res.json(tasks);
};


export const deleteTask = async (req, res) => {
    const taskDeleted = await Task.findByIdAndDelete(req.params.id);
    if (taskDeleted != null) {
        res.json(`Task with ${req.params.id} id has been deleted`);
    } else {
        res.json('Task didnt find');
    }
};

export const countTasks = async (req, res) => {
    const counter = await Task.find().count();
    res.json({
        "counter": counter,
    });
};

export const findTrueTasks = async (req, res) => {
    const tasksDone = await Task.find({ done: true });
    res.json(tasksDone);
};


export const updateTask = async (req, res) => {
    await Task.findByIdAndUpdate(req.params.id, req.body);
    res.json('task was updated');
};
