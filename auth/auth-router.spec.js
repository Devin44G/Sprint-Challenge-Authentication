const request = require("supertest");
const server = require("../api/server.js");

function numGenerator() {
  let num = Math.random() * 1000;
  return num;
}

const testUser = {
  username: `testUser.${numGenerator()}`,
  password: 'pass'
};

const registeredUser = {
  username: 'Gerald',
  password: 'gerry'
};

const invalidUser = {
  username: 'Geraldzzz',
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
    it('should return 401 when invalid credentials given', () => {
      return request(server)
        .post('/api/auth/login')
        .send(invalidUser)
        .then(res => {
          expect(res.status).toBe(401);
        });
    });
    it('should return token when user logs in', () => {
      return request(server)
        .post('/api/auth/login')
        .send(registeredUser)
        .then(res => {
          expect(res.body).toHaveProperty("token");
        });
    });
  });
});
