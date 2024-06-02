const mongoose = require('mongoose');

const VoteSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    electionId: { type: mongoose.Schema.Types.ObjectId, ref: 'Election', required: true },
    candidateId: { type: mongoose.Schema.Types.ObjectId, ref: 'Candidate', required: true },
});

module.exports = mongoose.model('Vote', VoteSchema);
