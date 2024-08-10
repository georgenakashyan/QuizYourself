const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').get((req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    User.findById(req.params.id)
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    User.findByIdAndDelete(req.params.id)
        .then(users => res.json('Studyset deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
    User.findById(req.params.id)
        .then(users => {
            users.first_name = req.body.first_name;
            users.last_name = req.body.last_name;
            users.email = req.body.email;
            users.username = req.body.username;
            users.owned_study_set_ids = req.body.owned_study_set_ids;
            users.favorite_studyset_ids = req.body.favorite_studyset_ids;

            users.save()
                .then(() => res.json('User updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const first_name = req.body.first_name;
    const last_name = req.body.last_name;
    const email = req.body.email;
    const username = req.body.username;
    const owned_study_set_ids = [];
    const favorite_studyset_ids = [];

    const newUser = new User({
        first_name,
        last_name,
        email,
        username,
        owned_study_set_ids,
        favorite_studyset_ids,
    });

    newUser.save()
        .then(() => res.json('User added!'))
        .catch(err => res.status(400).json('Error: ' + err));

});

module.exports = router;