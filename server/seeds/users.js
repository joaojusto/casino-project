var userSeeds = [
  {
    "username": "admin",
    "email": "admin@example.com",
    "password": "12345",
    "profile": {
      "name": "admin"
    }
  }
];

if (!Meteor.users.find().fetch().length)
  seedUsers(userSeeds);

function seedUsers(seeds) {
  seeds.forEach(Accounts.createUser);
}
