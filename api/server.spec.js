const request = require("supertest");
const server = require("./server.js");

describe('server.js', () => {
  describe('GET /', () => {
    it('should return a message', () => {
      return request(server).get('/')
        .then(res => {
          expect(res.status).toBe(200);
        });
    });
    it('should return a JSON object', () => {
      return request(server).get('/')
        .then(res => {
          expect(res.type).toMatch(/json/i);
        });
    });
    it('should respond with { statusReport: "all systems a go" }', () => {
      return request(server).get('/')
        .then(res => {
          expect(res.body.statusReport).toMatch(/all systems a go/i);
        });
    });
  });
});
