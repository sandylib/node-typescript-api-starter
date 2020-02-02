import app from './app'

import request from "supertest";

describe("GET /random-url", () => {
    it("should return 404", (done) => {
        request(app).get("/reset")
            .expect(404, done);
    });

    it("should login", (done) => {
        request(app).post("/login")
            .field("email", "sandy@gmail.com")
            .field("password", "Secret12")
            .end(function(err, res) {
                done();
            })
            .expect(200);
    })

    it("should register user", (done) => {
        request(app).post("/register")
            .field("email", "sandy+1@gmail.com")
            .field("password", "Secret123")
            .end(function(err, res) {
                done();
            })
            .expect(200);
    })

    it("should not register user, if failed validation", (done) => {
        request(app).post("/register")
            .field("email", "sandy.z@gmail.com")
            .field("name", "sandyz")
            .field("password", "Secret")
            .field("passwordConfirmation", "Secret")
            .expect(400)
            .end(function(err, res) {
                // console.log('err', res.body.message)
                done();
            })
           
    })

    it("should register user", (done) => {
        request(app).post("/register")
            .field("email", "sandy.z@gmail.com")
            .field("name", "sandyz")
            .field("password", "Secret12")
            .field("passwordConfirmation", "Secret12")
            .expect(400)
            .end(function(err, res) {
                done();
            })
           
    })


})