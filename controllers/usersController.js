const { v4: uuidv4 } = require('uuid');

let users = [];


const getUsers = (req, res) => {
  res.status(200).json(users);
};


const getUserById = (req, res) => {
  const userId = req.params.userId;
  let user
for(let i =0; i<users.length; i++){
  user = users[i]
}
  if (!userId) {
    return res.status(400).json({ error: 'Invalid userId' });
  }

  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }

  res.status(200).json(user);
};


const createUser = (req, res) => {
  const { username, age, hobbies } = req.body;

  if (!username || !age || !hobbies) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const newUser = {
    id: uuidv4(),
    username,
    age,
    hobbies,
  };

  users.push(newUser);
  res.status(201).json(newUser);
};


const updateUser = (req, res) => {
  const userId = req.params.userId;
  const { username, age, hobbies } = req.body;

  const userIndex = users.findIndex((user) => user.id === userId);
  if (!userId) {
    return res.status(400).json({ error: 'Invalid userId' });
  }
  if (userIndex === -1) {
    return res.status(404).json({ error: 'User not found' });
  }

  users[userIndex] = {
    id: userId,
    username: username || users[userIndex].username,
    age: age || users[userIndex].age,
    hobbies: hobbies || users[userIndex].hobbies,
  };
  res.status(200).json(users[userIndex]);
};


const deleteUser = (req, res) => {
  const userId = req.params.userId;
  const userIndex = users.findIndex((user) => user.id === userId);
  if (!userId) {
    return res.status(400).json({ error: 'Invalid userId' });
  }
  if (userIndex === -1) {
    return res.status(404).json({ error: 'User not found' });
  }
  users.splice(userIndex, 1);
  res.status(204).send();
};


module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
};
