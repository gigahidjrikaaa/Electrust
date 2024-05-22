const mongoose = require('mongoose');

const CandidateSchema = new mongoose.Schema({
    name: { type: String, required: true },
    election: { type: mongoose.Schema.Types.ObjectId, ref: 'Election' },
    description: { type: String, required: true }
});

module.exports = mongoose.model('Candidate', CandidateSchema);
