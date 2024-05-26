require('dotenv').config();
const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');

const User = require('../backend/electrust-api/models/User'); // Adjust the path as necessary
const Election = require('../backend/electrust-api/models/Election'); // Adjust the path as necessary

const usersFilePath = path.join(__dirname, 'users.json');
const electionsFilePath = path.join(__dirname, 'elections.json');

const usersData = JSON.parse(fs.readFileSync(usersFilePath, 'utf8'));
const electionsData = JSON.parse(fs.readFileSync(electionsFilePath, 'utf8'));

// Password for every account: password123

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('MongoDB connected');

  // Insert users
  User.insertMany(usersData)
    .then(() => {
      console.log('Users inserted');
    })
    .catch((err) => {
      console.error('Error inserting users:', err);
    });

  // Insert elections
  Election.insertMany(electionsData)
    .then(() => {
      console.log('Elections inserted');
    })
    .catch((err) => {
      console.error('Error inserting elections:', err);
    })
    .finally(() => {
      mongoose.connection.close();
    });
}).catch((err) => {
  console.error('MongoDB connection error:', err);
});
