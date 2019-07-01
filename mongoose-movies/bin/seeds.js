const mongoose = require("mongoose");
const Celebrity = require("../models/celebrity");

const dbName = "mongoose-movies";
mongoose.connect(`mongodb://localhost/${dbName}`);

const celebrities = [
  {
    name: "Scarlett Johansson",
    occupation: "actor",
    catchPhrase: "Did anyone ever tell you you play a very aggressive game?"
  },
  {
    name: "Leonardo DiCaprio",
    occupation: "actor",
    catchPhrase:
      "Let me tell you something. There's no nobility in poverty. I've been a poor man, and I've been a rich man. And I choose rich every fucking time."
  },
  {
    name: "Bruce Willis",
    occupation: "actor",
    catchPhrase: "Yippee-ki-yay, motherfucker!"
  }
];

Celebrity.create(celebrities, err => {
  if (err) {
    throw err;
  }
  console.log(`Created ${celebrities.length} celebrities`);
  mongoose.connection.close();
});
