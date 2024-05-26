const mongoose = require('mongoose');
const User = require('./models/User');
const Election = require('./models/Election');
const Candidate = require('./models/Candidate');

const users = [
  {
    name: "Alice Johnson",
    email: "alice@example.com",
    password: "$2a$10$JxG5bJ4G/BwM7I7dsNde/eEox3K5nLJpIm/cSZ9jFviP1aISlgM8O", // hashed password
    googleId: null,
    date: "2024-05-01T00:00:00Z"
  },
  {
    name: "Bob Smith",
    email: "bob@example.com",
    password: "$2a$10$yPzzCuYz9fXnOuhsziROs.dQKwVVq0ziM/dT4p8U4Zo/1xLGbX2He", // hashed password
    googleId: null,
    date: "2024-05-02T00:00:00Z"
  },
  {
    name: "Charlie Brown",
    email: "charlie@example.com",
    password: "$2a$10$y2Jf1ZKjG5K8wG7Kf.P0aOBj/ZsBn6JKMDi0Z8MSJp/h1JmWwfhAa", // hashed password
    googleId: "1234567890abcdef12345678",
    date: "2024-05-03T00:00:00Z"
  }
];

const elections = [
  {
    name: "Presidential Election 2024",
    description: "Election to choose the next president.",
    startDate: "2024-11-01T00:00:00Z",
    endDate: "2024-11-15T00:00:00Z"
  },
  {
    name: "City Council Election 2024",
    description: "Election to choose city council members.",
    startDate: "2024-06-01T00:00:00Z",
    endDate: "2024-06-15T00:00:00Z"
  }
];

const candidates = [
  {
    name: "John Doe",
    description: "Experienced politician with a vision for the future.",
    electionId: "electionId_1"
  },
  {
    name: "Jane Smith",
    description: "Community leader and advocate for change.",
    electionId: "electionId_1"
  },
  {
    name: "Emily Davis",
    description: "Focused on improving education and healthcare.",
    electionId: "electionId_2"
  },
  {
    name: "Michael Brown",
    description: "Dedicated to environmental sustainability and green energy.",
    electionId: "electionId_2"
  }
];

const seedDB = async () => {
  await mongoose.connect('mongodb://localhost:27017/yourDatabaseName', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

  await User.deleteMany({});
  await User.insertMany(users);

  await Election.deleteMany({});
  const insertedElections = await Election.insertMany(elections);

  for (let candidate of candidates) {
    const election = insertedElections.find(e => e.name === candidate.electionId);
    candidate.electionId = election._id;
  }

  await Candidate.deleteMany({});
  await Candidate.insertMany(candidates);

  mongoose.connection.close();
};

seedDB().then(() => {
  console.log('Database seeded!');
});
