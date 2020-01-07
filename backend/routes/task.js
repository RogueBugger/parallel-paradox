const router = require('express').Router();
const taskSchema = require('../models/task.model');

router.route('/').get((req, res)=>{
    taskSchema.find()
        .then(taskk => res.json(taskk))
        .catch(err => res.status(404).json('error' + err));
})

router.route('/add').post((req, res) => {
    const taskname = req.body.taskname;
    const taskDuration = Number(req.body.taskDuration);
    const task_description = req.body.task_description;
    const deadline = Date.parse(req.body.deadline);
    const taski = new taskSchema({taskname, taskDuration, task_description, deadline});
    taski.save()
        .then(()=> res.json('task saved'))
        .catch(err => res.status(404).json('error'+err))
});

router.route('/:id').get((req, res) =>{
    taskSchema.findById(req.params.id)  
        .then(task => res.json(task))
        .catch(err => res.status(400).json('Error='+err));
});

router.route('/:id').post((req, res) => {
    taskSchema.findById(req.params.id)
        .then(task => {
            task.taskname = req.body.taskname;
            task.taskDuration = req.body.taskDuration;
            task.taskSchema = req.body.taskSchema;
            task.task_description = req.body.task_description;
            task.save()
                .then(task => res.json('task updated'))
                .catch(err => res.status(404).json('Error = '+err));
        })
        .catch(err => res.status(404).json("Error = "+err));
});
router.route('/:id').delete((req, res) => {
    taskSchema.findByIdAndDelete(req.params.id)
        .then(() => res.json("task deleted"))
        .catch(err => res.status(404).json("Error = "+err));
});

module.exports = router;    