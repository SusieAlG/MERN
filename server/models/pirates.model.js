const mongoose = require('mongoose');

const PirateSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "You must put name!"],
        unique: true
    },
    imageUrl: {
        type: String,
        required: [true, "You must put img url!"]
    },
    treasureChests: {
        type: Number,
        required: [true, " You must select number of treasure chests!"]
    },
    catchPhrase: {
        type: String,
        required: [true, "You must put catch!"]
    },
    crewPosition: {
        type: String,
        required: [true, "Crew position is required"],
        enum: ["Captain", "First Mate", "Quarter Master", "Bootswain", "Powder Monkey"]
    },
    pegLeg: {
        type: Boolean,
        default: true
    },
    eyePatch: {
        type: Boolean,
        default: true
    },
    hookHand: {
        type: Boolean,
        default: true
    }
}, { timestamps: true });

const Pirate = mongoose.model("Pirate", PirateSchema);

module.exports = Pirate;