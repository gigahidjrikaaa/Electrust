const mongoose = require('mongoose');

const ElectionSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    candidates: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Candidate' }],
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true }
});

module.exports = mongoose.model('Election', ElectionSchema);
