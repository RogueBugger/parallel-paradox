const router = require('express').Router();
const userSchema = require('../models/user.model');

router.route('/').get((req, res)=>{
    userSchema.find()
        .then(user => res.json(user))
        .catch(err => res.status(400).json('Error' + err));
});

router.route('/add').post((req, res)=>{
    const username = req.body.username;
    console.log('hello');
    const user = new userSchema({username});
    user.save()
        .then(()=> res.json('user saved'))
        .catch(err => res.status(404).json('Error'+ err));
});

module.exports = router;