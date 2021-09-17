const mongoose = require('mongoose');

const PetSchema = new mongoose.Schema(
    {
        name: { 
            type: String,
            required: [true, "Name is required"],
            minlength: [3, "Name must be at least 3 characters long"]
        },
        type: { 
            type: String,
            required: [true, "Type is required"],
            minlength: [3, "Type must be at least 3 characters long"]
        },
        description: { 
            type: String,
            required: [true, "Description is required"],
            minlength: [3, "Description must be at least 3 characters long"]
        },
        skill_1: { 
            type: String,
            default: ""
        },
        skill_2: { 
            type: String,
            default: ""
        },
        skill_3: { 
            type: String,
            default: ""
        },
        likeCount: { 
            type: Number,
            default: 0
        },
    }, { timestamps: true }    
);

const Pet = mongoose.model('pet', PetSchema);

module.exports = Pet;