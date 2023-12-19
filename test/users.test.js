const chai = require('chai');
const chaiHttp = require('chai-http');
const { v4: uuidv4 } = require('uuid');
const { getUsers, getUserById, createUser, updateUser, deleteUser } = require('../controllers/usersController');

const { expect } = chai;
chai.use(chaiHttp);

describe('Users Controller', () => {
  let testUserId;

  beforeEach(() => {
    users = [];
  });

  describe('getUsers', () => {
    it('should return an empty array when no users are present', (done) => {
      const req = {};
      const res = {
        status: (code) => ({
          json: (data) => {
            expect(code).to.equal(200);
            expect(data).to.be.an('array').that.is.empty;
            done();
          },
        }),
      };

      getUsers(req, res);
    });
      
  });

  describe('getUserById', () => {

    it('should handle invalid userId', (done) => {
      const req = { params: { userId: '' } };
      const res = {
        status: (code) => ({
          json: (data) => {
            expect(code).to.equal(400);
            expect(data).to.deep.equal({ error: 'Invalid userId' });
            done();
          },
        }),
      };

      getUserById(req, res);
    });

    it('should handle user not found', (done) => {
      const req = { params: { userId: 'nonexistentUserId' } };
      const res = {
        status: (code) => ({
          json: (data) => {
            expect(code).to.equal(404);
            expect(data).to.deep.equal({ error: 'User not found' });
            done();
          },
        }),
      };

      getUserById(req, res);
    });
  });

  describe('createUser', () => {
    it('should create a new user', (done) => {
      const req = {
        body: {
          username: 'testuser',
          age: 25,
          hobbies: ['reading', 'coding'],
        },
      };
      const res = {
        status: (code) => ({
          json: (data) => {
            expect(code).to.equal(201);
            expect(data).to.be.an('object');
            expect(data).to.have.property('id');
            testUserId = data.id;
            done();
          },
        }),
      };

      createUser(req, res);
    });

    it('should handle missing required fields', (done) => {
      const req = {
        body: {
          // Missing required fields
        },
      };
      const res = {
        status: (code) => ({
          json: (data) => {
            expect(code).to.equal(400);
            expect(data).to.deep.equal({ error: 'Missing required fields' });
            done();
          },
        }),
      };

      createUser(req, res);
    });
  });

  describe('updateUser', () => {


    it('should handle invalid userId', (done) => {
      const req = {
        params: { userId: '' },
        body: {
          // Updated fields
        },
      };
      const res = {
        status: (code) => ({
          json: (data) => {
            expect(code).to.equal(400);
            expect(data).to.deep.equal({ error: 'Invalid userId' });
            done();
          },
        }),
      };

      updateUser(req, res);
    });

    it('should handle user not found', (done) => {
      const req = {
        params: { userId: 'nonexistentUserId' },
        body: {
          // Updated fields
        },
      };
      const res = {
        status: (code) => ({
          json: (data) => {
            expect(code).to.equal(404);
            expect(data).to.deep.equal({ error: 'User not found' });
            done();
          },
        }),
      };

      updateUser(req, res);
    });
  });

  describe('deleteUser', () => {

    it('should handle invalid userId', (done) => {
      const req = { params: { userId: '' } };
      const res = {
        status: (code) => ({
          json: (data) => {
            expect(code).to.equal(400);
            expect(data).to.deep.equal({ error: 'Invalid userId' });
            done();
          },
        }),
      };

      deleteUser(req, res);
    });

    it('should handle user not found', (done) => {
      const req = { params: { userId: 'nonexistentUserId' } };
      const res = {
        status: (code) => ({
          json: (data) => {
            expect(code).to.equal(404);
            expect(data).to.deep.equal({ error: 'User not found' });
            done();
          },
        }),
      };

      deleteUser(req, res);
    });
  });
});
