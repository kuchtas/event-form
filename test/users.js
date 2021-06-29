process.env.NODE_ENV = "test";
const expect = require("chai").expect;
const request = require("supertest");

const app = require("../server");
const conn = require("../database/index");

describe("POST /users", () => {
  before((done) => {
    conn
      .connect()
      .then(() => done())
      .catch((err) => done(err));
  });

  after((done) => {
    conn
      .close()
      .then(() => done())
      .catch((err) => done(err));
  });

  it("Creating new user", (done) => {
    request(app)
      .post("/users")
      .send({
        name: "Name",
        surname: "Surname",
        email: "example@mail.com",
        date: "2021-06-28",
      })
      .then((res) => {
        const body = res.body;
        expect(body).to.contain.property("name");
        expect(body).to.contain.property("surname");
        expect(body).to.contain.property("email");
        expect(body).to.contain.property("date");
        done();
      })
      .catch((err) => done(err));
  });

  it("Creating new user with wrong data - missing name", (done) => {
    request(app)
      .post("/users")
      .send({
        name: "",
        surname: "Surname",
        email: "example@mail.com",
        date: "2021-06-28",
      })
      .then((res) => {
        const errors = res.body.errors;
        expect(errors[0].msg).to.equal("Name should not be empty");
        done();
      })
      .catch((err) => done(err));
  });

  it("Creating new user with wrong data - null name", (done) => {
    request(app)
      .post("/users")
      .send({
        name: null,
        surname: "Surname",
        email: "example@mail.com",
        date: "2021-06-28",
      })
      .then((res) => {
        const errors = res.body.errors;
        expect(errors[0].msg).to.equal("Name should not be empty");
        done();
      })
      .catch((err) => done(err));
  });

  it("Creating new user with wrong data - missing surname", (done) => {
    request(app)
      .post("/users")
      .send({
        name: "Name",
        surname: "",
        email: "example@mail.com",
        date: "2021-06-28",
      })
      .then((res) => {
        const errors = res.body.errors;
        expect(errors[0].msg).to.equal("Surname should not be empty");
        done();
      })
      .catch((err) => done(err));
  });

  it("Creating new user with wrong data - null surname", (done) => {
    request(app)
      .post("/users")
      .send({
        name: "Name",
        surname: null,
        email: "example@mail.com",
        date: "2021-06-28",
      })
      .then((res) => {
        const errors = res.body.errors;
        expect(errors[0].msg).to.equal("Surname should not be empty");
        done();
      })
      .catch((err) => done(err));
  });

  it("Creating new user with wrong data - missing email", (done) => {
    request(app)
      .post("/users")
      .send({
        name: "Name",
        surname: "Surname",
        email: "",
        date: "2021-06-28",
      })
      .then((res) => {
        const errors = res.body.errors;
        expect(errors[0].msg).to.equal("Email should be valid and not empty");
        done();
      })
      .catch((err) => done(err));
  });

  it("Creating new user with wrong data - null email", (done) => {
    request(app)
      .post("/users")
      .send({
        name: "Name",
        surname: "Surname",
        email: "",
        date: "2021-06-28",
      })
      .then((res) => {
        const errors = res.body.errors;
        expect(errors[0].msg).to.equal("Email should be valid and not empty");
        done();
      })
      .catch((err) => done(err));
  });

  it("Creating new user with wrong data - wrong email", (done) => {
    request(app)
      .post("/users")
      .send({
        name: "Name",
        surname: "Surname",
        email: "mail",
        date: "2021-06-28",
      })
      .then((res) => {
        const errors = res.body.errors;
        expect(errors[0].msg).to.equal("Email should be valid and not empty");
        done();
      })
      .catch((err) => done(err));
  });

  it("Creating new user with wrong data - missing date", (done) => {
    request(app)
      .post("/users")
      .send({
        name: "Name",
        surname: "Surname",
        email: "example@mail.com",
        date: "",
      })
      .then((res) => {
        const errors = res.body.errors;
        expect(errors[0].msg).to.equal("Date should not be empty");
        done();
      })
      .catch((err) => done(err));
  });

  it("Creating new user with wrong data - null date", (done) => {
    request(app)
      .post("/users")
      .send({
        name: "Name",
        surname: "Surname",
        email: "example@mail.com",
        date: null,
      })
      .then((res) => {
        const errors = res.body.errors;
        expect(errors[0].msg).to.equal("Date should not be empty");
        done();
      })
      .catch((err) => done(err));
  });
});
