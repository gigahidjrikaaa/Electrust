const mongoose = require('mongoose');

const VoteSchema = new mongoose.Schema({
    electionId: mongoose.Schema.Types.ObjectId,
    candidate: String,
    userId: String
});

module.exports = mongoose.model('Vote', VoteSchema);
