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

module.exports = router;