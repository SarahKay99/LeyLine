const seedData = require("../data/seedData");
const repository = require('../data/dataRepository');

module.exports = {
  // Delete One Day
  create_bug: async (req, res) => {
    bug = {
      name: "Testy New Bug",
      author: "Thomas",
      status: "Failed",
      description: "Will It Blend",
      tags: [{name: "Nice", colour: "info"}],
      date: "01/01/2020",
      comments: [],
    };
    await repository.InsertSingleBug(bug);
    res.redirect('/leyline_index');
  },

  seed_data: async (req, res) => {
    await seed();
    res.redirect('/leyline_index');
  },
};

let seed = (async function() {
    const bugs = seedData.initialBugs;
    await repository.InsertBugCollection(bugs);
});