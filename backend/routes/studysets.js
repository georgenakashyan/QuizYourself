const router = require('express').Router();
let Studyset = require('../models/studyset.model');

router.route('/').get((req, res) => {
    Studyset.find()
        .then(studysets => res.json(studysets))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const owner_id = req.body.owner_id;
    const flashcards = new Map([]);
    const public_access = false;

    const newStudyset = new Studyset({
        owner_id,
        flashcards,
        public_access
    });

    newStudyset.save()
        .then(() => res.json('Studyset added!'))
        .catch(err => res.status(400).json('Error: ' + err));

});

module.exports = router;