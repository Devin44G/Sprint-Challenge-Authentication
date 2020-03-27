const request = require("supertest");
const server = require("../api/server.js");

let num1 = Math.random * 1000;
let num2 = Math.random * 500;

const testUser = {
  username: `testUser.${num1}${num2}`,
  password: 'pass'
};

const registeredUser = {
  username: 'Gerald',
  password: 'gerry'
};

describe('auth-router.js', () => {
// REGISTER TESTS
  describe('register endpoint', () => {
    it('should return a 500 status when either/both a username and password is not given', () => {
      return request(server)
        .post('/api/auth/register')
        .then(res => {
          expect(res.status).toBe(500);
        });
    });
    it('should return a 201 status when registering new user', () => {
      return request(server)
        .post('/api/auth/register')
        .send(testUser)
        .then(res => {
          expect(res.status).toBe(201);
        });
    });
  });
// LOGIN && JOKES TESTS
  describe('login endpoint', () => {
    it('should ', () => {

    });
  });
});
