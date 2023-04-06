const seedPosts = require('./postSeeds');
const seedUsers = require('./userSeeds');
const seedComments = require('./commentSeeds');

const sequelize = require('../config/connection');
const seedData = async() => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');
    await seedUsers();
        console.log('\n----- USERS SEEDED -----\n');
    await seedPosts();
        console.log('\n----- POSTS SEEDED -----\n');
    await seedComments();
        console.log('\n----- COMMENTS SEEDED -----\n');
    
process.exit(0);
};

seedData();