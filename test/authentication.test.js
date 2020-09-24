const chai = require("chai");
const should = chai.should();
const chaiHttp = require("chai-http");
const server = require("../app");
const seedData = require("../data/seedUserData");

chai.use(chaiHttp);

beforeEach(async () => {
  await seedData.seed();
});

describe("Logout Tests ->", () => {
  it("should logout a user", (done) => {
    let agent = chai.request.agent(server);
    agent.post("/auth/login")
    .send({
      username: 'charmander',
      password: 'password',
    })
    .then(() => {
      agent.get("/auth/logout")
      .then((res) => {
        res.redirects.length.should.eql(0);
        res.status.should.eql(200);
        res.type.should.eql("application/json");
        res.body.status.should.eql("success");
        done();
      });
    });
  });

  it("Should throw error if a user is not logged in", (done) => {
    chai
      .request(server)
      .get("/auth/logout")
      .end((err, res) => {
        res.redirects.length.should.eql(0);
        res.status.should.eql(401);
        res.type.should.eql("application/json");
        res.body.status.should.eql("Please Login Mate!");
        done();
      });
  });
});

describe("Login Tests ->", () => {
  it("Should login a User", (done) => {
    chai
      .request(server)
      .post("/auth/login")
      .send({
        username: "charmander",
        password: "password",
      })
      .end((err, res) => {
        should.not.exist(err);
        res.redirects.length.should.eql(0);
        res.status.should.eql(200);
        res.type.should.eql("application/json");
        res.body.status.should.eql("success");
        done();
      });
  });

  it("Should not login unregistered user", (done) => {
    chai
      .request(server)
      .post("/auth/login")
      .send({
        username: "not",
        password: "auser",
      })
      .end((err, res) => {
        should.not.exist(err);
        res.redirects.length.should.eql(0);
        res.status.should.eql(404);
        res.type.should.eql("application/json");
        res.body.status.should.eql("User not found");
        done();
      });
  });
});

describe("Register Tests ->", () => {
  it("Should register a new user", (done) => {
    chai
      .request(server)
      .post("/auth/register")
      .send({
        username: "Bob",
        password: "password",
      })
      .end((err, res) => {
        should.not.exist(err);
        res.redirects.length.should.eql(0);
        res.status.should.eql(200);
        res.type.should.eql("application/json");
        res.body.status.should.eql("success");
        done();
      });
  });
});
