const repository = require("../data/bugRepository");
const seedData = require("../data/seedData");

module.exports = {
  // render main page.
  get_all_bugs: async (req, res) => {
    repository.GetAllBugs()
    .then((data) => {
      res.render("leyline_index", {
        title: "LeyLine",
        subtitle: "LeyLine",
        bugList: data,
      });
    })
    .catch((err) => {
      res.redirect("/error");
    })
  },
  
  get_all_bugs_json: async (req, res) => {
    repository.GetAllBugs()
    .then((data) => {
      console.log(data);
      res.send(data);
    })
    .catch((err) => {
      res.redirect("/error");
    })
  },
  
  get_bug_by_id_json: async (req, res) => {
    let bug = await repository.GetBugByID(req.body.bugID);
    res.json(bug);
  },

  create_bug_get: async (req, res) => {
    res.render("addbug");
  },

  add_tag: async (req, res) => {
    repository.AddTag(req.body.id, req.body.tag);
    res.send("OK");
  },

  create_bug_post: async (req, res) => {
    console.log(req.body);
    bug = {
      name: req.body.name,
      author: req.body.author,
      status: req.body.status,
      description: req.body.description,
      tags: req.body.tags,
      date: req.body.date,
      comments: [],
    };
    repository
      .InsertSingleBug(bug)
      .then(() => {
        res.redirect("/");
      })
      .catch((err) => {
        res.render("error");
      });
  },

  update_bug: async (req, res) => {
    await repository.UpdateBug(req.body);
    res.send('OK');
  },

  update_bug_status: async (req, res) => {
    let bug = await repository.GetBugByID(req.body.bugID);
    bug.status = req.body.status;
    repository.UpdateBug(bug);
  },

  get_bug_view_component: async (req, res) => {
    bugs = await repository.GetAllBugs();
    res.render('/Components/anotherComponent/renderBugComponent',
      (err, result) => {
        if(err) {
          res.redirect('/error');
        } 
        else {
          res.send(require('ejs').render(result, bugs));
        }
      }
    )
  }
};





