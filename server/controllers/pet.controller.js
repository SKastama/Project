const  Pet  = require('../models/pet.model');

// Create
module.exports.createPet = (req, res) => {
    Pet.create(req.body)
        .then(pet => res.json(pet))
        .catch(err => res.status(400).json(err))
}

// Get all
module.exports.getAllPets = (req, res) => {
    Pet.find({})
        .then(pets => res.json(pets))
        .catch(err => res.status(400).json(err))
}

// Get one
module.exports.getPet = (req, res) => {
    Pet.findOne({_id:req.params.id})
        .then(pet => res.json(pet))
        .catch(err => res.status(400).json(err))
}

// Update one
module.exports.updatePet = (req, res) => {
    Pet.findOneAndUpdate({_id: req.params.id}, req.body, {new:true, runValidators:true})
        .then(updatedPet => res.json(updatedPet))
        .catch(err => res.status(400).json(err))
}

// Delete one
module.exports.deletePet = (req, res) => {
    Pet.deleteOne({ _id: req.params.id })
        .then(deleteConfirmation => res.json(deleteConfirmation))
        .catch(err => res.status(400).json(err))
}